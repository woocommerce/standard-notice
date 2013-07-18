(function ($) {
	"use strict";
	$(function () {

		// If #standard-notice exists, let's monitor it's input.
		if ($('#standard-notice').length > 0) {

			// Translators: You'll need to translate this string.
			var sDefaultMessage = 'Your post message preview will appear here.';

			// When the user types in the post message...
			$('#standard-notice').keyup(function () {

				// If the post message is empty, set the default value;
				// Otherwise, set what the user has typed.
				if ($.trim($(this).val()).length === 0) {
					$('#standard-notice-preview').html(sDefaultMessage);
				} else {
					$('#standard-notice-preview').html($(this).val());
				} // end if/else

			});

		} // end if

	});

}(jQuery));