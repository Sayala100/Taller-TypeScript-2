import { Serie } from "./Serie.js";
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.blogs.es/16e585/breaking-bad/1366_2000.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://www.channelguidemag.com/wp-content/uploads/2018/07/OrangeIsTheNewBlackBB-678x381.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://static1.purebreak.com.br/articles/6/83/98/6/@/313135-de-game-of-thrones-jon-snow-kit-hari-200x200-1.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://media.revistagq.com/photos/5cee4ed9d1dca845dac0aa34/1:1/w_1028,h_1028,c_limit/the-big-bang-theory.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://gabinetepericialgpi.com/wp-content/uploads/2019/02/image.png"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "data:image/jpeg;base64,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"),
];
