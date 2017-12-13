var board = {
	name: 'Kanban Board',
	addColumn: function(column) {
		this.$element.append(column.$element);
		initSortable();
	},
	$element: $('#board .column-container')
};

$('.create-column').click(function() {
	var columnName = prompt('Enter a column name');
	if (columnName !== null) {
		$.ajax({
			url: baseUrl + '/column/',
			method: 'POST',
			data: {
				name: columnName
			},
			success: function(response){
				var column = new Column(response.id, columnName);
				board.addColumn(column);
			}
		});
	}	
});
	
	function initSortable() {
		
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder',
			receive: function(event, ui) {
				$.ajax({
					url: baseUrl + '/card/' + ui.item[0].id,
					method: 'PUT',
					data: {
						name: ui.item[0].innerText,
						bootcamp_kanban_column_id: ui.item[0].parentElement.id 
					},
					
					success: function(response) {
						console.log('sortable');
					}
					
				});
				
				console.log('ui: ' + ui);
			}
			
		}).disableSelection();
		
	}
