$(document).ready(function(){
	var $container = $('.person-container');

	$('.fetch').click(function(){
		var count = Number($('.input-count').val());
		var $loader = $('.loader', $container.parent());

		$loader.fadeIn(200);
		$container.slideDown(100);

		var params = {
			results: count
		};

		$.ajax({
			url: 'http://api.randomuser.me/',
			dataType: 'json',
			data: params,
			success: function(response){
				$container.empty();
				$loader.fadeOut(200);

				$.each(response.results, function(i, val){
					console.log(val.user.name.first+' '+val.user.name.last+' '+val.user.phone);

					var template = ""+
						'<div class="person">'+
							'<img class="person__avatar" src="'+val.user.picture.medium+'">'+
							'<div class="person__info">'+
								'<h2 class="person__name">'+val.user.name.first+' '+val.user.name.last+'</h2>'+
								'<p class="person__phone">'+val.user.phone+'</p>'+
							'</div>'+
						'</div>';
					$container.append(template);
				});
				$container.slideDown(300);
			}
		});
	});
});
