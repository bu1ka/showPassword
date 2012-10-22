(function($) {

	$.fn.showPassword = function() {

		return $.each(this, function() {

			var eye = $('<i class="input-password-show" />'),
				self = this,
				wrapper = $('<div class="input-password" />'),
				input = $(this);

			var mt = input.css('margin-top'),
				mr = input.css('margin-right'),
				mb = input.css('margin-bottom'),
				ml = input.css('margin-left'),
				pt = input.css('padding-top'),
				pb = input.css('padding-bottom'),
				pl = input.css('padding-left'),
				ww = input.outerWidth(),
				//height = input.height(),
				height = input.outerHeight(),
				eyeMt = (height/2)-10;

			input.css({
				'margin' : '0',
				'padding' : pt + ' 45px ' + pb + ' ' + pl,
				'position' : 'static',
				'width' : '100%',
				'height' : height,
				'-moz-box-sizing' : 'border-box',
				'-webkit-box-sizing' : 'border-box',
				'-ms-box-sizing' : 'border-box'
			})

			eye.css('margin-top', eyeMt+'px');

			try {
				var textNode = $(self).clone().css("display", "none").attr({"type" : "text", "data-type" : "textPass"});
			} catch (ex) {
				var textNode = $('<input type="text" />').data('type', 'textPass').css('display','none');
				alert(ex);
			};


			wrapper.css({
				'margin' : mt +' '+ mr +' '+ mb + ' ' + ml,
				'width' : ww,
				'height' : height,
				'position' : 'relative'
			});

			input = input.wrap(wrapper);
			input.before(eye);
			input.after(textNode);

			eye.click(function() {
				var currentInput = $(this).siblings(':visible');
				replace(currentInput, this);
			});
		});

		function replace(node, eye) {

			var value = $(node).val(),
				eye = $(eye),
				next = $(node).siblings(':hidden');

			eye.toggleClass("input-password-show_opened");
			next.val(value).toggle();
			node.toggle();
		};
	};
})(jQuery);