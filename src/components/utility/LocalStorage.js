import swal from 'sweetalert';
const getStordCard = () => {
    const storedCard = localStorage.getItem('card-list')
    if(storedCard) {
        return JSON.parse(storedCard)
    }
    return []
}

const saveCard = card => {
    const storedCard = getStordCard()
    const exits = storedCard.find(item => item.id === card.id);
    if(!exits){
        storedCard.push(card)
        localStorage.setItem('card-list', JSON.stringify(storedCard))
        swal("Good job!", "You clicked the button!", "success");
    }else{
        swal("Good job!", "You clicked the button!", "warning");
    }
}

export {saveCard, getStordCard}