var echo = true;

function RunCommand(text) {
    let texts = text.split(' ')
    for (i = 0; i < texts.length; i++) {
        if (texts[i] == '') {
            texts.splice(i, 1)
        }
    }
    if (texts[0].length > 0) {
        header = document.getElementById('lines')
        header.append(temp = document.createElement('br'))
        upperBase = texts[0].toUpperCase()
        br = true
        switch (upperBase) {
            case 'CMD':
                window.open('index.html', '_blank')
                header.append('Opening new window...')
                break
            case 'COLOR':
                colors = [['0', '#000000'],
                          ['1', '#0037DA'],
                          ['2', '#13A10E'],
                          ['3', '#3A96DD'],
                          ['4', '#C50F1F'],
                          ['5', '#881798'],
                          ['6', '#C19C00'],
                          ['7', '#CCCCCC'],
                          ['8', '#767676'],
                          ['9', '#3B78FF'],
                          ['A', '#16C60C'],
                          ['B', '#61D6D6'],
                          ['C', '#E74856'],
                          ['D', '#B4009E'],
                          ['E', '#F9F1A5'],
                          ['F', '#FFFFFF']]
                if (typeof texts[1] === 'undefined') {
                    temp.remove()
                    r.style.setProperty('--background-color', '#000')
                    r.style.setProperty('--text-color', '#fff')
                    break
                } else {
                    upperArg1 = texts[1].toUpperCase()
                }
                if (upperArg1.length == 2) {
                    if (upperArg1[0] != upperArg1[1]) {
                        for (i = 0; i < colors.length; i++) {
                            if (upperArg1[0] == colors[i][0]) {
                                for (j = 0; i < colors.length; j++) {
                                    if (upperArg1[1] == colors[j][0]) {
                                        r = document.querySelector(':root')
                                        r.style.setProperty('--background-color', colors[i][1])
                                        r.style.setProperty('--text-color', colors[j][1])
                                        return
                                    }
                                }
                            }
                        }
                        colorHelp()
                        return
                    } else {
                        colorHelp()
                    }
                } else {
                    colorHelp()
                }
                break
            case 'DATE':
                today = new Date().toLocaleDateString()
                day = new Date().getDay()
                switch(day) {
                    case 0:
                        day = 'Sun'
                    case 1:
                        day = 'Mon'
                    case 2:
                        day = 'Tue'
                    case 3:
                        day = 'Wed'
                    case 4:
                        day = 'Thu'
                    case 5:
                        day = 'Fri'
                    case 6:
                        day = 'Sat'
                }
                header.append(`The current date is: ${day} ${today}`)
                break
            case 'ECHO':
                echo = text.slice(5)
                header.append(echo)
                break
            case 'EXIT':
                close()
                break
            case 'HELP':
                HelpCommand(text)
                br = false
                break
            case 'REPO':
                window.open('https://github.com/Javascript-void0/terminal', '_blank')
                header.append('Opening the repository...')
                break
            case 'SYSINFO':
            case 'SYSTEMINFO':
                lines = [' ',
                         'Host Name:                 Guest',
                         'OS Name:                   Microsoft Windows 98',
                         'OS Version:                4.1.10093 N/A Build 19928',
                         'OS Manufacturer:           Microsoft Corporation',
                         'OS Configuration:          Standalone Workstation',
                         'OS Build Type:             Multiprocessor Free',
                         'Registered Owner:          rick@rickastley.co.uk',
                         'Registered Organization:   Rick Astley Inc.',
                         'Product ID:                00376-37102-38874-APPOE',
                         'Original Install Date:     04/20/1995, 5:14:53 PM',
                         'System Boot Time:          04/20/1995, 5:14:54 PM',
                         'System Manufacturer:       LG Corporation',
                         'System Model:              LG Smart Refrigerator',
                         'System Type:               x69-based Refrigerator',
                         'Processor(s):              1 Processor(s) Installed.',
                         '                           [01]: Intel69 Family 8 Model 303 Stepping 12 GenuineIntel ~120 Mhz',
                         'BIOS Version:              LG Corportaion 12.772, 5/4/109',
                         'Windows Directory:         C:\\WINDOWS',
                         'System Directory:          C:\\WINDOWS\system69',
                         'Boot Device:               \\Device\\HarddiskVolume1',
                         'System Locale:             en-us;English (United States)',
                         'Input Locale:              en-us;English (United States)',
                         'Time Zone:                 (UTC-05:00) Eastern Time (US & Canada)',
                         'Total Physical Memory:     32,109 MB',
                         'Available Physical Memory: 12,601 MB',
                         'Virtual Memory: Max Size:  42,933 MB',
                         'Virtual Memory: Available: 22,380 MB',
                         'Virtual Memory: In Use:    20,553 MB',
                         'Page File Location(s):     C:\pagefile.sys',
                         'Domain:                    WORKGROUP',
                         'Logon Server:              \\Guest',
                         'Hotfix(s):                 5 Hotfix(s) Installed.',
                         '                           [01]: KB1973664',
                         '                           [02]: KB0384861',
                         '                           [03]: KB1088287',
                         '                           [04]: KB5017363',
                         '                           [05]: KB5127364',
                         'Network Card(s):           2 NIC(s) Installed.',
                         '                           [01]: Wireless-AC Network Controller',
                         '                                 Connection Name: Wi-Fi',
                         '                                 DHCP Enabled:    Yes',
                         '                                 DHCP Server:     500.0.0.0',
                         '                                 IP address(es)',
                         '                                 [01]: 10.0.1.0',
                         '                                 [02]: bf90::f24e:a3fe:b45c:4deb',
                         '                           [02]: Bluetooth Device (Personal Area Network)',
                         '                                 Connection Name: Bluetooth Network Connection 2',
                         '                                 Status:          Media disconnected',
                         'Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed.'
                        ]
                listToHTML(lines)
                return
            case 'TASKLIST':
                lines = ['Image Name                     PID Session Name        Session#    Mem Usage',
                         '========================= ======== ================ =========== ============',
                         'System Idle Process              0 Services                   0          8 K',
                         'System                           4 Services                   0        144 K',
                         'Secure System                  104 Services                   0     25,060 K',
                         'Registry                       168 Services                   0     66,120 K',
                         'smss.exe                       552 Services                   0      1,104 K',
                         'csrss.exe                      816 Services                   0      4,968 K',
                         'wininit.exe                    896 Services                   0      5,316 K',
                         'services.exe                   944 Services                   0      9,668 K',
                         'csrss.exe                      952 Console                    1      5,808 K',
                         'LsaIso.exe                     992 Services                   0      3,404 K',
                         'svchost.exe                  10552 Services                   0     17,084 K',
                         'ctfmon.exe                    1760 Console                    1     27,312 K',
                         'ChsIME.exe                    8536 Console                    1      7,904 K',
                         'RuntimeBroker.exe            11888 Console                    1     20,788 K',
                         'WmiPrvSE.exe                 12212 Services                   0      9,760 K',
                         'RtkAudUService64.exe         14292 Console                    1      8,952 K',
                         'svchost.exe                  16168 Console                    1     21,488 K',
                         'svchost.exe                   3028 Services                   0     15,780 K',
                         'RuntimeBroker.exe            12160 Console                    1     27,728 K',
                         'dasHost.exe                  10212 Services                   0      6,976 K',
                         'dasHost.exe                   2140 Services                   0      4,896 K',
                         'dasHost.exe                   7988 Services                   0      9,396 K',
                         'dllhost.exe                  13248 Console                    1     11,456 K',
                         'UserOOBEBroker.exe           18064 Console                    1      9,028 K',
                         'svchost.exe                   9616 Services                   0      5,972 K',
                         'TextInputHost.exe              520 Console                    1    134,380 K',
                         'LockApp.exe                  14792 Console                    1     29,704 K',
                         'RuntimeBroker.exe            13660 Console                    1     31,196 K',
                         'ShellExperienceHost.exe       9292 Console                    1     43,436 K',
                         'RuntimeBroker.exe             9920 Console                    1     17,864 K',
                         'SystemSettingsBroker.exe      2460 Console                    1     23,964 K',
                         'RuntimeBroker.exe            13068 Console                    1      8,092 K',
                         'svchost.exe                  15248 Console                    1     11,412 K',
                         'RuntimeBroker.exe             8372 Console                    1     15,284 K',
                         'backgroundTaskHost.exe       19284 Console                    1      1,656 K',
                         'FileCoAuth.exe               16972 Console                    1     27,224 K',
                         'svchost.exe                  17276 Services                   0      6,100 K',
                         'svchost.exe                  20228 Services                   0      8,088 K',
                         'chrome.exe                    5308 Console                    1     82,084 K',
                         'svchost.exe                  10624 Services                   0     18,660 K',
                         'chrome.exe                   14988 Console                    1     19,696 K',
                         'WUDFHost.exe                 18980 Services                   0      6,384 K',
                         'svchost.exe                  16744 Services                   0      6,060 K',
                         'svchost.exe                  14812 Services                   0      9,960 K',
                         'svchost.exe                   3256 Services                   0      7,732 K',
                         'dllhost.exe                  19376 Console                    1     13,500 K',
                         'smartscreen.exe              11852 Console                    1     23,940 K',
                         'cmd.exe                       9564 Console                    1      5,008 K',
                         'conhost.exe                   7288 Console                    1     19,832 K',
                         'tasklist.exe                 15040 Console                    1      9,180 K',
                         'WmiPrvSE.exe                 15824 Services                   0     10,124 K'
                        ]
                listToHTML(lines)
                break
            case 'TIME':
                current = new Date()
                hour = current.getHours()
                minute = current.getMinutes()
                second = current.getSeconds()
                millisecond = current.getMilliseconds()

                header.append(`The current time is: ${hour}:${minute}:${second}.${millisecond}`)
            case 'TITLE':
                if (typeof texts[1] === 'undefined') {
                    temp.remove()
                    return
                }
                document.title = texts[1]
                return
            case 'TREE':
                lines = ['Folder PATH listing for volume Local Disk',
                         'Volume serial number is AA2C-008A',
                         'C:.',
                         '├───asset',
                         '│   └───Menlo-Regular.ttf',
                         '├───js',
                         '│   ├───commands.js',
                         '│   ├───cursor.js',
                         '│   ├───help.js',
                         '│   └───input.js',
                         '├───index.html',
                         '├───README.md',
                         '└───style.css'
                        ]
                listToHTML(lines)
                return
            case 'VER':
                header.append('Microsoft Windows [Version 4.10.2222 A]')
                break
            case 'VOL':
                header.append('Volume in drive C is Local Disk')
                header.append('Volume Serial Number is AA2C-008A')
                break
            default:
                header.append(`'${text}' is not a recognized command. Type 'help' for list of commands. `)
        }
        if (br) {
            header.append(document.createElement('br'))
        }
    }
}

function colorHelp() {
    lines = ['Sets the default console foreground and background colors.',
             ' ',
             'COLOR [attr]',
             ' ',
             '  attr        Specifies color attribute of console output',
             ' ',
             'Color attributes are specified by TWO hex digits -- the first',
             'corresponds to the background; the second the foreground.  Each digit',
             'can be any of the following values:',
             ' ',
             '    0 = Black       8 = Gray',
             '    1 = Blue        9 = Light Blue',
             '    2 = Green       A = Light Green',
             '    3 = Aqua        B = Light Aqua',
             '    4 = Red         C = Light Red',
             '    5 = Purple      D = Light Purple',
             '    6 = Yellow      E = Light Yellow',
             '    7 = White       F = Bright White',
             ' ',
             'If no argument is given, this command restores the color to what it was',
             'when CMD.EXE started.  This value either comes from the current console',
             'window, the /T command line switch or from the DefaultColor registry',
             'value.',
             ' ',
             'The COLOR command sets ERRORLEVEL to 1 if an attempt is made to execute',
             'the COLOR command with a foreground and background color that are the',
             'same.',
             ' ',
             'Example: "COLOR fc" produces light red on bright white'
            ]
    listToHTML(lines)
}