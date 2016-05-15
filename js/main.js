$(document).ready(init);

function init(){
	$("#mi_libro").booklet(
			{
				width:800,
				height:600,
				/* tamaño */

				closed: true, /* cerrar libro */
				covers: true, /* contraportada */
				autoCenter: true, /* centrar */


				pagePadding: 0,	/* padding */
				hoverWidth:100,


			}

		);

	$('#bt_go').click(function(){
		$('#mi_libro').booklet('gotopage', $('#in_go').val());

	});
}
