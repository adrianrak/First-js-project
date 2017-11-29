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
	
		$cardDelete.click(function() {
			self.removeCard();
		});
	
		$card.append($cardDelete)
			.append($cardDescription);
		cardDescription.text(self.name);
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
			self.element.remove();
		  }
		});
	}
};