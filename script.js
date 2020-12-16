const generateRandNum = num => {
    return Math.floor(Math.random() * num);
}

const source = ['Scripture','Joke','Wise saying'];

const messages = {
    Scriptures : ['Make it your aim to live quietly and to mind your own business and to work with your hands,(1 Thess 4:11)','I know how to be low on provisions and how to have an abundance. In everything and in all circumstances I have learned the secret of both how to be full and how to hunger, both how to have an abundance and how to do without.(Phillipians 4:12)','Wisdom is the most important thing, so acquire wisdom,And with all you acquire, acquire understanding.(Prov 4:7)'],
    Jokes : ['A man spoke frantically into the phone: "My wife is pregnant and her contractions are only two minutes apart!" "Is this her first child?" the doctor asked. "No, you idiot!" the man shouted. "This is her husband!"','Would you like to hear a construction joke?.....[Yes].....Well I’m still working on it.','I went to see the doctor about my short-term memory problems. The first thing the bastard did was made me pay in advance.','Man to a butcher:"I would like bulls testicles...."Butcher: "So would I."'],
    Wisesayings : ['A burden that one chooses is not felt. - Italian (on self-reliance)','A day is lost if one has not laughed. - French (on the conduct of life)','A moments insight is sometimes worth a lifes experience. - Oliver Wendell Holmes (1809-1894)','Its not the load that breaks you down, its the way you carry it. Anonymous'] 
}


const generateMessage = () => {
    let randomSource = generateRandNum(source.length);
    switch (randomSource) {
        case 0:
            return `Scripture: ${messages['Scriptures'][generateRandNum(messages['Scriptures'].length)]}`;
            break;
        case 1:
            return `Joke: ${messages['Jokes'][generateRandNum(messages['Jokes'].length)]}`;
            break;
        case 2:
            return `Wise Saying: ${messages['Wisesayings'][generateRandNum(messages['Wisesayings'].length)]}`;
            break;
    }
}
console.log(generateMessage());