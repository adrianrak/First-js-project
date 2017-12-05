// KLASA KANBAN CARD
function Card(id, name, columnId) {
	var self = this;

	this.columnId = ColumnID(columnId);
	console.log('columnId: ' + columnId);
	this.id = id;
	this.name = name;
	this.$element = createCard();
	console.log('id karty: ' + this.id);

	function createCard() {
		var $card = $('<li>').addClass('card');
		var $cardDescription = $('<p>').addClass('card-description').text(self.description);
		var $cardDelete = $('<button>').addClass('btn-delete').text('x');
		var $editCard = $('<button>').addClass('edit-card').text('Edit name');

		$cardDelete.click(function() {
			self.removeCard();
		});
		$editCard.click(function(){
			self.cardEdit();
		});
		$card.append($cardDelete)
				 .append($cardDescription)
				 .append($editCard);
		$cardDescription.text(self.name);
		return $card;
		}
}
Card.prototype = {
	removeCard: function() {
		var self = this;
		$.ajax({
		  url: baseUrl + '/card/' + self.id,
		  method: 'DELETE',
		  success: function(){
			self.$element.remove();
		  }
		});
	},

	cardEdit: function() {
		var self = this;
		var newName = prompt('Enter new name of this card');
		$.ajax({
			url: baseUrl + '/card/' + self.id,
			method: 'PUT',
			data: {
				id: self.id,
				name: newName,
				bootcamp_kanban_column_id: self.columnId
			},
			succes: function(response) {
				self.$element.children('card-description').text(newName);
				self.name = newName;
			}
		});
	}
};