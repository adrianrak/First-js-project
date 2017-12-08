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
					url: baseUrl + '/card/' + ui.item.id,
					method: 'PUT',
					data: {
						name: $(this).text(),
						bootcamp_kanban_column_id: ui.item.parents()[0].id
					},
					
					success: function(response) {
						console.log('sortable');
					}
					
				});
				console.log(ui.item.parents()[0].id);
				// itemId = ui.item.id;
				// itemName = ui.item.innerText;
				// columnId = ui.item.columnId;
				// dragItem(itemId, itemName, columnId);
				// console.log('event: ' + event);
				// console.log('ui: ' + ui);
				// console.log('itemId: ' + ui.item.id);
				// console.log('itemName: ' + ui.item.innerText);
				// console.log('columnId: ' + ui.item.columnId);
			}
			
		}).disableSelection();
		
	}