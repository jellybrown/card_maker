import { firebaseDatabase } from './firebase';

class CardRepository {
    syncCards(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }


    saveCard(userId, newCard) {
        firebaseDatabase.ref(`${userId}/cards/${newCard.id}`).set(newCard)
    }

    removeCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;