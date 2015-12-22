Go from this

```
➜  shell-table git:(master) ✗ ps
  PID TTY           TIME CMD
 6235 ttys000    0:01.66 -zsh
  624 ttys001    0:00.33 -zsh
 4145 ttys001    0:00.02 tmux
74784 ttys002    0:01.76 -zsh
10977 ttys003    0:00.26 -zsh
31438 ttys003    0:00.02 tmux
 4148 ttys004    0:00.23 -zsh
 4221 ttys005    0:00.35 -zsh
50000 ttys006    0:00.16 -zsh
31439 ttys007    0:00.83 -zsh
31513 ttys008    0:00.23 -zsh
50972 ttys008    0:00.13 node ./node_modules/.bin/mocha -w
50973 ttys008   25:36.46 /usr/local/bin/node /Users/petar/src/personal/aramid/node_modules/mocha/bin/_mocha -w
51020 ttys009    0:00.79 -zsh
 6563 ttys010    0:00.18 -zsh
15195 ttys011    0:00.22 -zsh
18319 ttys012    0:02.17 -zsh
 7863 ttys013    0:00.14 -zsh
51124 ttys014    0:00.70 -zsh
26298 ttys015    0:00.14 -zsh
56782 ttys016    0:00.21 -zsh
```

to this 

```
➜  shell-table git:(master) ✗ ps | tanble2json 
[ { PID: '6235', TTY: 'ttys000    0:0', TIME: '1.66', CMD: '-zsh' },
  { PID: '624', TTY: 'ttys001    0:0', TIME: '0.33', CMD: '-zsh' },
  { PID: '4145', TTY: 'ttys001    0:0', TIME: '0.02', CMD: 'tmux' },
  { PID: '74784', TTY: 'ttys002    0:0', TIME: '1.76', CMD: '-zsh' },
  { PID: '10977', TTY: 'ttys003    0:0', TIME: '0.26', CMD: '-zsh' },
  { PID: '31438', TTY: 'ttys003    0:0', TIME: '0.02', CMD: 'tmux' },
  { PID: '4148', TTY: 'ttys004    0:0', TIME: '0.23', CMD: '-zsh' },
  { PID: '4221', TTY: 'ttys005    0:0', TIME: '0.35', CMD: '-zsh' },
  { PID: '50000', TTY: 'ttys006    0:0', TIME: '0.16', CMD: '-zsh' },
  { PID: '31439', TTY: 'ttys007    0:0', TIME: '0.83', CMD: '-zsh' },
  { PID: '31513', TTY: 'ttys008    0:0', TIME: '0.23', CMD: '-zsh' },
  { PID: '50972',
    TTY: 'ttys008    0:0',
    TIME: '0.13',
    CMD: 'node ./node_modules/.bin/mocha -w' },
  { PID: '50973',
    TTY: 'ttys008   25:3',
    TIME: '7.34',
    CMD: '/usr/local/bin/node /Users/petar/src/personal/aramid/node_modules/mocha/bin/_mocha -w' },
  { PID: '51020', TTY: 'ttys009    0:0', TIME: '0.95', CMD: '-zsh' },
  { PID: '58904',
    TTY: 'ttys009    0:0',
    TIME: '0.00',
    CMD: 'node index.js' },
  { PID: '6563', TTY: 'ttys010    0:0', TIME: '0.18', CMD: '-zsh' },
  { PID: '15195', TTY: 'ttys011    0:0', TIME: '0.22', CMD: '-zsh' },
  { PID: '18319', TTY: 'ttys012    0:0', TIME: '2.17', CMD: '-zsh' },
  { PID: '7863', TTY: 'ttys013    0:0', TIME: '0.14', CMD: '-zsh' },
  { PID: '51124', TTY: 'ttys014    0:0', TIME: '0.70', CMD: '-zsh' },
  { PID: '26298', TTY: 'ttys015    0:0', TIME: '0.14', CMD: '-zsh' },
  { PID: '56782', TTY: 'ttys016    0:0', TIME: '0.21', CMD: '-zsh' } ]
```

### Installation

``` npm install --save table2json```