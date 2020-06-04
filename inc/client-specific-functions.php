<?php
/**
 * You client/theme specific functions go here
 */

if ( ! function_exists('mayo_button_shortcode')) {
	function mayo_button_shortcode($atts, $content = null) {
		// Extract shortcode attributes
		extract( shortcode_atts( array(
			'url'    => '',
			'title'  => '',
			'target' => '',
			'text'   => '',
		), $atts ) );

		// Use text value for items without content
		$content = $text ? $text : $content;
		//enter framework-specific css class(es) for buttons
		$btn_css_class = 'btn btn-primary btn-shortcode'; //B4 primary button class & override class for shortcode buttons

		// Return button with link
		if ( $url ) {

			$link_attr = array(
				'href'   => esc_url( $url ),
				'title'  => esc_attr( $title ),
				'target' => ( 'blank' == $target ) ? '_blank' : '',
			);

			$link_attrs_str = '';

			foreach ( $link_attr as $key => $val ) {

				if ( $val ) {

					$link_attrs_str .= ' ' . $key . '="' . $val . '"';

				}

			}


			return '<a' . $link_attrs_str . ' class="'.$btn_css_class.'"><span>' . do_shortcode( $content ) . '</span></a>';

		}

		// No link defined so return button as a span
		else {

			return '<span class="'.$btn_css_class.'"><span>' . do_shortcode( $content ) . '</span></span>';

		}
	}
}

if (function_exists('mayo_button_shortcode')) {
	add_shortcode('mayo_button','mayo_button_shortcode');
}
