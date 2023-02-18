<?php
### Check Whether User Can Manage Downloads
if(!current_user_can('manage_downloads')) {
	die('Access Denied');
}


### Variables Variables Variables
$base_name = plugin_basename( 'wp-cybertour/download-manager.php' );
$base_page = 'admin.php?page='.$base_name;
$file_path = get_option('download_path');
$file_categories = get_option( 'download_categories' );
$upload_dir   = wp_upload_dir();
$plugin_name = reset(explode('/', str_replace(WP_PLUGIN_DIR . '/', '', __DIR__)));
$plugin_dirname = $upload_dir['basedir'].'/'.$plugin_name.'/';
if ( ! file_exists( $plugin_dirname ) ) {
	wp_mkdir_p( $plugin_dirname );
}
### Form Processing
if( ! empty( $_POST['do'] ) ) {
	check_admin_referer('wp-cybertour_add-file');
	// Decide What To Do
	switch( $_POST['do'] ) {
		// Add File
		case __('Add File', 'wp-cybertour'):
			if( $_FILES['file_upload']['size'] > get_max_upload_size() ) {
				$text = '<p style="color: red;">'.sprintf(__('File Size Too Large. Maximum Size Is %s', 'wp-cybertour'), format_filesize(get_max_upload_size())).'</p>';
				break;
			} else {
				if(is_uploaded_file($_FILES['file_upload']['tmp_name'])) {
					if(move_uploaded_file($_FILES['file_upload']['tmp_name'], $plugin_dirname.basename($_FILES['file_upload']['name']))) {
						$file = $plugin_dirname.basename($_FILES['file_upload']['name']);
						$file_name=basename($_FILES['file_upload']['name']);
						$file = download_rename_file($plugin_dirname, $file);
						$file_size = filesize($file);
						//
						WP_Filesystem();
						if ( unzip_file( $file, $plugin_dirname.'/'.pathinfo($file_name)['filename']) ) {\
							wp_delete_file( $file );      
						} else {
							$text = '<p style="color: red;">There was an error unzipping the file.</p>';
							break;
						}
					} else {
						$text = '<p style="color: red;">'.__('Error In Uploading File.', 'wp-cybertour').'</p>';
						break;
					}
				} else {
					$text = '<p style="color: red;">'.__('Error In Uploading File. File upload proces is crached', 'wp-cybertour').'</p>';
					break;
				}
			}
			//
			if ( empty( $text ) ) {
				$file_name = ! empty( $_POST['file_name'] ) ? addslashes( wp_kses_post( trim( $_POST['file_name'] ) ) ) : '';
				if(empty($file_name)) {
					$file_name = basename($file);
				}
				$file_des = ! empty( $_POST['file_des'] ) ? addslashes( wp_kses_post( trim( $_POST['file_des'] ) ) ) : '';
				$file_category = ! empty( $_POST['file_cat'] ) ? intval( $_POST['file_cat'] ) : 0;
				if(!empty($_POST['file_size'])) {
					$file_size = ! empty( $_POST['file_size'] ) ? intval( $_POST['file_size'] ) : 0;
				}
				$file_hits = ! empty( $_POST['file_hits'] ) ? intval( $_POST['file_hits'] ) : 0;
				$file_timestamp_day =    ! empty( $_POST['file_timestamp_day'] ) ? intval( $_POST['file_timestamp_day'] ) : 0;
				$file_timestamp_month =  ! empty( $_POST['file_timestamp_month'] ) ? intval( $_POST['file_timestamp_month'] ) : 0;
				$file_timestamp_year =   ! empty( $_POST['file_timestamp_year'] ) ? intval( $_POST['file_timestamp_year'] ) : 0;
				$file_timestamp_hour =   ! empty( $_POST['file_timestamp_hour'] ) ? intval( $_POST['file_timestamp_hour'] ) : 0;
				$file_timestamp_minute = ! empty( $_POST['file_timestamp_minute'] ) ? intval( $_POST['file_timestamp_minute'] ) : 0;
				$file_timestamp_second = ! empty( $_POST['file_timestamp_second'] ) ? intval( $_POST['file_timestamp_second'] ) : 0;
				$file_date = gmmktime($file_timestamp_hour, $file_timestamp_minute, $file_timestamp_second, $file_timestamp_month, $file_timestamp_day, $file_timestamp_year);
				$file_permission = ! empty( $_POST['file_permission'] ) ? intval( $_POST['file_permission'] ) : 0;

				$addfile = $wpdb->query("INSERT INTO $wpdb->downloads VALUES (0, '".preg_replace("/\.[^.]+$/", "", $file)."', '".preg_replace("/\.[^.]+$/", "", $file_name)."', '$file_des', '$file_size', $file_category, '$file_date', '$file_date', '$file_date', $file_hits, $file_permission)");
				
				if(!$addfile) {
					$text = '<p style="color: red;">'.sprintf(__('Error In Adding File \'%s (%s)\'', 'wp-cybertour'), $file_name, $file).'</p>';
				} else {
					$file_id = intval($wpdb->insert_id);
					$text = '<p style="color: green;">'.sprintf(__('File \'%s (%s) (ID: %s)\' Added Successfully', 'wp-cybertour'), $file_name, $file, $file_id).'</p>';
				}
			}
			break;
	}
}
?>
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.stripslashes($text).'</p></div>'; } ?>
<!-- Add A File -->
<form method="post" action="<?php echo admin_url('admin.php?page='.plugin_basename(__FILE__)); ?>" enctype="multipart/form-data">
	<input type="hidden" name="MAX_FILE_SIZE" value="<?php echo get_max_upload_size(); ?>" />
	<?php wp_nonce_field('wp-cybertour_add-file'); ?>
	<div class="wrap">
		<h2><?php _e('Add A File', 'wp-cybertour'); ?></h2>
		<table class="form-table">
			<tr>
				<td valign="top"><strong><?php _e('File:', 'wp-cybertour') ?></strong></td>
				<td>
					<!-- Upload File -->
					<input type="file" name="file_upload" size="25" dir="ltr" />
					<br /><small><?php printf(__('Maximum file size is %s.', 'wp-cybertour'), format_filesize(get_max_upload_size())); ?></small>
				</td>
			</tr>
<!--
			<tr>
				<td><strong><?php _e('File Name:', 'wp-cybertour'); ?></strong></td>
				<td><input type="text" size="50" maxlength="200" name="file_name" /></td>
			</tr>
			<tr>
				<td valign="top"><strong><?php _e('File Description:', 'wp-cybertour'); ?></strong></td>
				<td><textarea rows="5" cols="50" name="file_des"></textarea></td>
			</tr>
-->
			<tr>
				<td><strong><?php _e('File Category:', 'wp-cybertour'); ?></strong></td>
				<td>
					<select name="file_cat" size="1">
						<?php
						for($i=0; $i<sizeof($file_categories); $i++) {
							if(!empty($file_categories[$i])) {
								echo '<option value="'.$i.'">'.$file_categories[$i].'</option>'."\n";
							}
						}
						?>
					</select>
				</td>
			</tr>
			<tr>
				<td valign="top"><strong><?php _e('File Size:', 'wp-cybertour') ?></strong></td>
				<td><input disabled type="text" size="10" name="file_size" />&nbsp;<?php _e('bytes', 'wp-cybertour'); ?><br /><small><?php _e('Размер данных тура.', 'wp-cybertour'); ?></small></td>
			</tr>
		    
			<tr>
				<td valign="top"><strong><?php _e('File Date:', 'wp-cybertour') ?></strong></td>
				<td><?php file_timestamp(current_time('timestamp')); ?></td>
			</tr>
			<tr>
				<td><strong><?php _e('Starting File Hits:', 'wp-cybertour') ?></strong></td>
				<td><input type="text" size="6" maxlength="10" name="file_hits" value="0" /></td>
			</tr>
			<tr>
				<td><strong><?php _e('Allowed To Download:', 'wp-cybertour') ?></strong></td>
				<td>
					<select name="file_permission" size="1">
						<option value="-2"><?php _e('Hidden', 'wp-cybertour'); ?></option>
						<option value="-1" selected="selected"><?php _e('Everyone', 'wp-cybertour'); ?></option>
						<option value="0"><?php _e('Registered Users Only', 'wp-cybertour'); ?></option>
						<option value="1"><?php _e('At Least Contributor Role', 'wp-cybertour'); ?></option>
						<option value="2"><?php _e('At Least Author Role', 'wp-cybertour'); ?></option>
						<option value="7"><?php _e('At Least Editor Role', 'wp-cybertour'); ?></option>
						<option value="10"><?php _e('At Least Administrator Role', 'wp-cybertour'); ?></option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center"><input type="submit" name="do" value="<?php _e('Add File', 'wp-cybertour'); ?>"  class="button" />&nbsp;&nbsp;<input type="button" name="cancel" value="<?php _e('Cancel', 'wp-cybertour'); ?>" class="button" onclick="javascript:history.go(-1)" /></td>
			</tr>
		</table>
	</div>
</form>
