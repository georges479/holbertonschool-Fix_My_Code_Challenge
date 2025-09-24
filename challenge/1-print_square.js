#!/usr/bin/node
/*
    Print a siuare with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

size = parseInt(process.argv[2], 16)
const char = '#';

for (let i = 0 ; i <= size ; i++) {
    console.log(char.repeat(i));
    process.stdout.write("\n");
}
