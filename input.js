document.onkeydown = KeyPress;

function KeyPress(e) {
    console.log(e.keyCode)
    before = document.getElementById('input').textContent;
    beforeAfterCursor = document.getElementById('input-after-cursor').textContent
    if (e.ctrlKey) {
        if (e.keyCode == 8) {
            if (before.charAt(before.length - 1) == ' ') {
                before = before.slice(0, -1)
            }
            split = before.split(' ')
            split.splice(-1)
            document.getElementById('input').textContent = split.join(' ') + ' '
            return
        }
        return
    }
    if ((e.keyCode >= 48 && e.keyCode <= 90) || (e.keyCode >= 186) || (e.keyCode == 32)) {
        document.getElementById('input').textContent = before + e.key
    } else if (e.keyCode == 8) {
        document.getElementById('input').textContent = before.slice(0, -1)
    } else if (e.keyCode == 46) {
        document.getElementById('input-after-cursor').textContent = beforeAfterCursor.slice(1)
    } else if (e.keyCode == 37 || e.keyCode == 39) {
        MoveCursor(e.keyCode)
    } else if (e.keyCode == 13) {
        RunCommand(before + beforeAfterCursor)
        NewLine()
        window.scrollTo(0, document.body.scrollHeight);
    }
}

function MoveCursor(direction) {
    before = document.getElementById('input').textContent
    beforeAfterCursor = document.getElementById('input-after-cursor').textContent
    if (direction == 37) {
        letter = before.charAt(before.length - 1)
        document.getElementById('input').textContent = before.slice(0, -1)
        document.getElementById('input-after-cursor').textContent = letter + beforeAfterCursor
    } else {
        letter = beforeAfterCursor.charAt(0)
        document.getElementById('input-after-cursor').textContent = beforeAfterCursor.slice(1)
        document.getElementById('input').textContent = before + letter
    }
}

function NewLine() {
    document.getElementById('input').removeAttribute('id')
    document.getElementById('cursor').textContent = ''
    document.getElementById('cursor').removeAttribute('id')
    document.getElementById('input-after-cursor').removeAttribute('id')

    header = document.getElementById('lines')
    header.append(document.createElement('br'))
    header.append('C:\\WINDOWS> ')
    input = document.createElement('span')
    header.append(input)
    input.setAttribute('id', 'input')
    cursor = document.createElement('span')
    header.append(cursor)
    cursor.setAttribute('id', 'cursor')
    cursor.textContent = '_'
    inputAfterCursor = document.createElement('span')
    header.append(inputAfterCursor)
    inputAfterCursor.setAttribute('id', 'input-after-cursor')
}

function RunCommand(text) {
    console.log(text)
    text = text.replace(' ', '')
    if (text.length > 0) {
        header = document.getElementById('lines')
        header.append(document.createElement('br'))
        if (text.toUpperCase() == 'HELP') {
            lines = ['HELP           List the avaiable commands.',
                     'GITHUB         Opens the Github Repository.',
                     'ABOUT          About me.'
                    ]
            for (i = 0; i < lines.length; i++) {
                temp = document.createElement('div')
                header.append(temp)
                htmlIn = lines[i].replaceAll(' ', '&nbsp')
                console.log(htmlIn)
                temp.innerHTML = htmlIn
            }
        } else {
            header.append(`'${text}' is not a recognized command. Type 'help' for list of commands. `)
            header.append(document.createElement('br'))
        }
    }
}