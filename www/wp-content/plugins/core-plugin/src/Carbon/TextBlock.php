<?php

namespace Sau\WP\Plugin\Core\Carbon;

use Carbon_Fields\Field;
use Sau\WP\Core\Carbon\Container;
use Sau\WP\Core\Carbon\ContainerType;
use Sau\WP\Core\Carbon\GutenbergBlock;

class TextBlock extends GutenbergBlock {

	public function getTitle(): string {
		return 'Text';
	}

	function getTemplate(): string {
		return '@s-core/block/text.html.twig';
	}

	public function getFields(): array {
		return [
			Field::make( 'text', 'text', __( 'Text' ) )
			     ->set_help_text( $var = __( 'Text' ) )
			     ->set_default_value( $var ),
		];
	}
}
