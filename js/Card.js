// KLASA KANBAN CARD
function Card(id, name) {
	var self = this;
	
	this.id = id;
	this.name = name;
	this.$element = createCard();
	
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
			url: baseUrl + '/card' + self.id,
			method: 'PUT',
			data: {
				bootcamp_kanban_column_id: self.id,
				name: newName
			},
			succes: function(response) {
				self.$element.children('card-description').text(newName);
				self.name = newName;
			}
		});
	}
};