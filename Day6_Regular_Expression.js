/*
Regular Expression

i Case insensitive
^ Start with
$ End with
^...$ Only
/^w.ter$/i  Any Character(.)
/w*ter/i  Zero or more characters
/wa?t?er/  a or t Optional character
\ Escape character
[] => /h[ea]llo/i => a or e any character or Both
[^a ] => don't start with a ( only in [])
[A-Z] => start with Upper case letters
[a-z] => start with lower case letters
[0-9] => range between 0 and 9
{} => Braclet
hel{2}o => must occur (2/L)
([h]){3}ello => h after 3 times
/^([h]){3}ello$/ => start and end with h and o

/\w/ => any word characters 0-9/a-z/A-Z
/\W/ => none Word characters @#$%
/\w+/ => word characters + Eg. word#$@
/\d/ => digit numbers 
/\D/ => None digit numbers
/\s/ => Space 
/\S/ => None space
/\b/ => Word boundary
/x(?=y)/ => match x if only it is follow by y
/x(?!y)/ => match x if only it is not follow by y


function letCheck(regex,string){
    if(regex.test(string)){
        console.log(`${string} matches ${regex.source}`);
    }else{
        console.warn(`${string} does not match ${regex.source}`);
    }
}
string = "xa";
regex = /x(?!y)/;
letCheck(regex,string);



*/
