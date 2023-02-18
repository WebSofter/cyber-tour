<?php
/**
 * Created by PhpStorm.
 * User: sau
 * Date: 07.04.18
 * Time: 17:49
 */

namespace Sau\WP\Plugin\Core\Twig;


use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class Phone extends AbstractExtension {
	public function getFilters() {
		return [
			new TwigFilter( 'ru_phone', function ( $var ) {
				$var = preg_replace( '/[^0-9]/', '', $var );
				if ( strlen( $var ) == 11 ) {
					$var = '7' . substr( $var, 1 );
				}
				$var = '+' . $var;

				return $var;
			} ),
		];
	}
}
