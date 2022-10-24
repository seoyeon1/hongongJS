function solution(letter) {
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    return letter.split(' ').map(v=>morse[v]).join('');

    // [다른 사람의 풀이] - reduce
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '');
}