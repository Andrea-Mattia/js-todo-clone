$(document).ready(function () {
    
    /**
     * Descrizione
     * Rifare la todo list come vista insieme a lezione:
     * 1. popolando gli elementi della lista con JavaScript
     * 2. inserendo un nuovo todo con un input testuale e gli eventi da tastiera
     * 3. Rimozione todo con click su icona
     * 4. Cliccando sul testo compare uno sbarramento a indicarne il completamento
     */

    // Sorgente di dati (al momento inseriti a mano)
    var todoItems = [
        {
            text: 'Seguire la lezione Boolean',
            completed: true,
        },
        {
            text: 'Fare l\'esercitazione pomeridiana',
            completed: false,
        },
        {
            text: 'Guardare di nuovo il meglio di AGG',
            completed: false,
        },
        {
            text: 'Provare a diventare di nuovo Batman',
            completed: false,
        },
        {
            text: 'Pulire il PC dalla polvere',
            completed: true,
        },
    ];

    // References
    var list = $('.todos');
    var newInput = $('.add-todo');
    var template = $('.template li');

    // 1. Inserimento di elementi nella todo list
    for (var i = 0; i < todoItems.length; i++) {
        // assegno ad una variabile dinamicamente i valori dell'array todoItems
        var todo = todoItems[i];
        // faccio un clone del template e lo assegno ad una variabile
        var item = template.clone();
        // cerco lo span 'text' e ci inserisco il valore text dell'oggetto
        item.find('.text').text(todo.text);

        // se per caso l'item ha un true come valore di completed gli aggiungo la classe completed per farci una linea sopra
        if (todo.completed) {
            item.find('.text').addClass('completed');
        }

        // inserisco nell'html i miei item
        list.append(item);
    }

    // 2. Inserimento nuovo todo nella lista tramite la pressione del tasto enter
    newInput.keyup(function(e) {
        // se il tasto premuto è 'enter'...
        if (e.which === 13) {
            // ...assegno il valore dell'input ad una variabile e lo pulisco da eventuali spazi
            var text = newInput.val().trim();
            // controllo che text non sia una stringa vuota
            if(text !== '') {
                // clono il template
                var item = template.clone();
                // cerco lo span 'text' e ci inserisco il testo che ha scritto l'utente con l'input
                item.find('.text').text(text);
                // aggiungo l'item alla lista
                list.append(item);
                // resetto il campo di inserimento dell'input dopo averne preso il valore
                newInput.val('');
            } else {
                alert('Attenzione, non hai inserito nessun valore! \nScrivi l\'elemento che vuoi inserire nella ToDo List!');
            }
        }
    });

    // 3. Rimozione todo items. Uso $('body').on() per fare in modo che anche gli elementi aggiunti
    // in seguito al caricamento di pagina abbiano la stessa funzionalità
    $('body').on('click', '.todos li i', function() {
        // uso this per indicare l'elemento esattamente cliccato, con parent() mi muovo al genitore <li> e lo elimino con remove()
        $(this).parent().remove();
    });


// End doc ready
});