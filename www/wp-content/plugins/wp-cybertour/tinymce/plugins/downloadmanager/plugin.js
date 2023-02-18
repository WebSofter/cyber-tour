(function() {
    tinymce.PluginManager.add('downloadmanager', function(editor) {
        editor.addCommand('wp-cybertour-Insert_Download', function() {
            var download_id = jQuery.trim(prompt(tinymce.translate('Enter File ID (Separate Multiple IDs By A Comma)')));
            if (download_id != null && download_id != "") {
                editor.insertContent('[download id="' + download_id + '"]');
            }
        });
        editor.addButton('downloadmanager', {
            text: false,
            tooltip: tinymce.translate('Insert File Download'),
            icon: 'downloadmanager dashicons-before dashicons-download',
            onclick: function() {
                tinyMCE.activeEditor.execCommand('wp-cybertour-Insert_Download')
            }
        });
    });
})();