document.onkeydown = KeyPress;

function KeyPress(e) {
    // console.log(e.keyCode)
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