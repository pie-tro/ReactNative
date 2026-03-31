export function passwordService():string{
    let password:string = '';
    let caracteres:string = 'aeeasdasdascxarq241231]]';

    for(let i = 0; i<caracteres.length; i++){   
        let index = Math.floor(Math.random()*caracteres.length)%caracteres.length
        password+=caracteres.charAt(index);
    }
    

    return password;
}