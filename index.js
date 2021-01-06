const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const PREFIX = '?';
const Prefix = "!";

anboQuestionList = [];
anboAnsMsgIDlist = [];
imageSresultAnswer = [];
anboPinValue = 0;
anboImageAnsfound = false;
thisSaturday = "none"
imagematchfound = false;
ControlELink1st = "none"
ControlELink2st = "none"
dynoValue = 0
oprLink1 = "none"
oprLink2 = "none"
friTomHeader = false;

bot.on('ready', () => {
    console.log("Bot is online!")
    dyno = setInterval(() => {

        trigger = new Date();
        second = trigger.getSeconds();
        if (second == 0) {
            bot.channels.cache.get('787705631632523285').send('Timetable ON')
            bot.channels.cache.get('787705631632523285').send('Dyno Cycling (Heroku server restart)').then(msg => {
                msg.delete({ timeout: 120000 })
                bot.channels.cache.get('787217077239808011').send('Dyno Cycling (server restart)')


                console.log("dyno sec value " + second)
                clearInterval(dyno)
            })
        }
    }, 1000)
})

bot.on('message', message => {
    if (message.author.bot) return;
    commandFORanbo = message.content;
    if (message.channel.id == '781026992786243584' && (commandFORanbo[0][0] != "#")) {
        message.channel.send("No no no!! 😊I'm too shy to chat alone...");
        message.channel.send(". \nSo let's chat in **#💬_oii-chat** channel✌ in [Oii grp of companies ltd](<https://discord.com/channels/780352246546169856/781451444888666123/781452522623074335>) server");
    }
})

bot.on("message", message => {
    if (message.content == "RestartDatabase1221") {
        message.delete();
        anboQuestionList = [];
        anboAnsMsgIDlist = [];
        imageSresultAnswer = [];
        anboPinValue = 0;
        anboImageAnsfound = false;
        imagematchfound = false;
        message.channel.send("Database Restarted Successfully🤟")
    }
})

bot.on('message', message => {
    if (message.content === "anbopinON") {
        message.delete();
        message.channel.send("✔ Anbo Pins have turned ON Successfully");
        anboPinValue = 1
    } else if (message.content === "anbopinOFF") {
        message.delete();
        message.channel.send("❌ Anbo Pins have turned OFF Successfully");
        anboPinValue = 0

    }
})


bot.on('message', message => {
    if (message.content === "pinDelete") {
        message.delete();
        message.channel.messages.fetch({ limit: 100 })
            .then(fetched => {
                const notPinned = fetched.filter(fetchedMsg => fetchedMsg.pinned);

                message.channel.bulkDelete(notPinned, true);

            })
            .catch(console.error);
    }
})


bot.on('message', message => {
    if (message.content === "msgDelete") {
        message.channel.messages.fetch({ limit: 100 })
            .then(fetched => {

                const notPinneds = fetched.filter(fetchedMsg => !fetchedMsg.pinned);

                message.channel.bulkDelete(notPinneds, true);

            })
            .catch(console.error);
    }
})

bot.on('message', message => {
    if (message.content === "pinit") {


        if (message.reference != null) {
            let flagedMsgId = message.reference.messageID;

            message.channel.messages.fetch(flagedMsgId)

            .then(message => {
                if (message.attachments.size == 0) {
                    anbomsg = message.content;
                    message.channel.send(message.content)

                    .then((message) => {
                        if (true) {
                            message.pin()
                        }
                        if (anboPinValue == 1) { bot.channels.cache.get('781442701391298580').send(anbomsg); }

                        anboMAINmsg = anbomsg.split('\n');

                        anboQmsg = anboMAINmsg[0];
                        if (anboQmsg == "") { anboQmsg = anboMAINmsg[1] }

                        anboQuestionList.push(anboQmsg);

                        let anboPINEDansMsgId = message.id;



                        message.channel.messages.fetch(anboPINEDansMsgId)
                            .then(message => {
                                anboAnsMsgIDlist.push(message.content);

                            })





                    });

                } else { message.channel.send("This 💡Feature is not yet released for Attachments." + "\n" + "-WORKING ON IT" + "\n" + "***Stay Tuned!!***") }
            })

        }
    }
})

pinWarningValue = 0;




bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.id == '781026992786243584') { return }




    attachmentTorF = false;


    if (message.attachments.size != 0) {
        tempAttachmentFileList = []
        attachmentTorF = true;


        message.attachments.forEach(function(attachment) {
            tempAttachmentFileList.push(attachment.url);

        })

        console.log(tempAttachmentFileList);

    }




    freeEntry = false;

    let args = message.content.substring(Prefix.length).split(" ");
    listline = message.content.split("\n");
    answerName = listline[0];
    answerdes = message.content;
    list = message.content.split(" ");
    if (list[0][0] == "$") { freeEntry = "$"; } else if (list[0][0] == "!") { freeEntry = "!"; }




    if (message.reference != null) {


        let flagedMsgId = message.reference.messageID;
        orginalUsername = message.author.username;
        let guild = message.guild;
        let member = guild.member(message.author);

        let nickname = member ? member.displayName : null;
        if (nickname == orginalUsername) { oUN = "" } else { oUN = " " + "(" + orginalUsername + ")"; };

        whoanswered = nickname + oUN;
        whoRepliedBot = nickname;
        who = whoanswered;
        console.log(nickname);

        message.channel.messages.fetch(flagedMsgId)
            .then(message => {

                description = message.content;
                listAns = message.content.split("\n");

                options = listAns.length;

                freepass = false;
                answer = list[0].toLowerCase();
                switch (freeEntry) {
                    case "$":
                        answer = "$";
                        freepass = true;
                        break;
                    case "!":
                        answer = "!"
                        freepass = true;
                        break;
                    default:
                        break;
                }
                if (answer != "!") {
                    if (list.length != 1 && answer != "$" && freepass) { return; }
                }
                useranswer = list[0].toLowerCase();
                if (options > 5 || freepass == "!") {
                    answer = "multi";
                }

                if (options != 1 || (list[0] == "$" || list[0] == "!" || freepass)) {
                    if ((answer == 'a' || answer == 'b') || (answer == '$' || answer == 'h') || (answer == 'c' || answer == 'd') || (answer == 'e' || answer == '!') || (answer == 'n' || answer == 's') || (answer == 'v' || answer == 's') || (answer == 'f' || answer == 'h') || (answer == 'multi' || answer == 'g')) {
                        pinValue = 1;


                        switch (answer) {
                            case 'a':
                                Ans = '**' + "```fix" + '\n' + listAns[1] + '\n' + "```" + '**' + '\n' + listAns[2] + '\n' + listAns[3] + '\n' + listAns[4];
                                break;
                            case 'b':
                                Ans = listAns[1] + '\n' + '**' + "```fix" + '\n' + listAns[2] + '\n' + "```" + '**' + '\n' + listAns[3] + '\n' + listAns[4];
                                break;
                            case 'c':
                                Ans = listAns[1] + '\n' + listAns[2] + '\n' + '**' + "```fix" + '\n' + listAns[3] + '\n' + "```" + '**' + '\n' + listAns[4];
                                break;
                            case 'd':
                                Ans = listAns[1] + '\n' + listAns[2] + '\n' + listAns[3] + '\n' + '**' + "```fix" + '\n' + listAns[4] + '\n' + "```" + '**';
                                break;
                            case 'notq':

                                break;
                            case '!':
                                Ans = listAns[1] + '\n' + listAns[2] + '\n' + listAns[3] + '\n' + listAns[4] + '\n' + '\n' + '**' + "```css" + '\n' + "[Answer is not sure]" + '\n' + "```" + '**';
                                break;
                            case "$":
                                Ans = description;
                                listAns[0] = "";
                                break;
                            case 'multi':
                                Ans = description;
                                listAns[0] = "";
                                break;


                            default:
                                Ans = listAns[1] + '\n' + listAns[2] + '\n' + listAns[3] + '\n' + listAns[4] + '\n' + '\n' + '**' + 'invalid Option' + '**';
                                pinValue = 0;


                        }

                        if (message.author.bot) {
                            message.channel.send("**" + whoRepliedBot + "**" + ", Pls don't reply to my message🤠... Do reply to others✌");
                            return;
                        }

                        if (answer == "multi") {
                            if ((useranswer == 'a' || useranswer == 'b') || (useranswer == 'c' || useranswer == 'd') || (useranswer == '$' || useranswer == 'd')) {
                                answer = "multiC"
                            } else if (useranswer == '!') {
                                anbomsg = listAns[0] + '\n' + Ans + '\n' + '\n' + '**' + "```css" + '\n' + "[Answer is not sure]" + '\n' + "```" + '**' + '\n' + "Answered by ➪" + who + '\n' + '**' + "```diff" + '\n' + "+ミ★ ###################### ★彡" + '\n' + "```" + '**'

                            } else {
                                return;
                            }
                        }


                        if ((answer != "$" && answer != "multiC")) {
                            anbomsg = listAns[0] + '\n' + Ans + '\n' + '\n' + "🥳" + '**Answer: **' + answerName.toUpperCase() + '\n' + "Answered by ➪" + who + '\n' + '**' + "```diff" + '\n' + "+ミ★ ###################### ★彡" + '\n' + "```" + '**'
                        } else if (attachmentTorF) {
                            linkINtext = "";
                            tempAttachmentFileList.forEach(element => {
                                linkINtext = linkINtext + element;

                            });


                            anbomsg = message.content
                        } else {
                            anbomsg = listAns[0] + '\n' + Ans + '\n' + '\n' + "🥳" + '**Answer: **' + answerdes + '\n' + "Answered by ➪" + who + '\n' + '**' + "```diff" + '\n' + "+ミ★ ###################### ★彡" + '\n' + "```" + '**'
                        }

                        if (attachmentTorF == true) {
                            message.channel.send(message.content, { files: tempAttachmentFileList })
                                .then((message) => {
                                    if (pinValue == 1) {
                                        message.pin()
                                    }

                                    if (anboPinValue == 1) { bot.channels.cache.get('781442701391298580').send(message.content, { files: tempAttachmentFileList }); }

                                    anboMAINmsgimageQ = anbomsg.split('\n');

                                    anboQmsg = anboMAINmsgimageQ[0];
                                    if (anboQmsg == "") { anboQmsg = anboMAINmsgimageQ[1] }

                                    anboQuestionList.push(anboQmsg);



                                    anboAnsMsgIDlist.push(tempAttachmentFileList)





                                });

                        }


                        if (attachmentTorF != true) {
                            message.channel.send(anbomsg)
                                .then((message) => {
                                        if (pinValue == 1) {

                                            message.pin()
                                        }
                                        if (anboPinValue == 1) { bot.channels.cache.get('781442701391298580').send(anbomsg); }

                                        anboMAINmsg = anbomsg.split('\n');

                                        anboQmsg = anboMAINmsg[0];
                                        if (anboQmsg == "") { anboQmsg = anboMAINmsg[1] }

                                        anboQuestionList.push(anboQmsg);

                                        let anboPINEDansMsgId = message.id;



                                        message.channel.messages.fetch(anboPINEDansMsgId)
                                            .then(message => {
                                                anboAnsMsgIDlist.push(message.content);

                                            })


                                        anboAnsMsgIDlist.push()
                                        console.log(anboMAINmsg);



                                    }


                                ).catch(console.error);

                        }
                    }
                }
            }).catch(console.error);


    }


})






bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.id == '781026992786243584') { return }

    userInputScnt = message.content;
    mcqORnot = userInputScnt.split('\n');
    spSearchkeywordpara = userInputScnt.split(" ");



    questionFromUser = mcqORnot[0];
    if (questionFromUser == "") { questionFromUser = mcqORnot[1] }
    mcqORnotBylen = mcqORnot.length;
    count = 0;
    matchCounttext = 0;
    matchCountimage = 0;
    totalCount = 0;
    let anboSearchId = message.channel.id;
    console.log(message.channel.id);
    spfreepass = false;

    ohNovalue = true;
    tempAnboSresult = [];



    anboQuestionList.forEach(element => {

        if (spSearchkeywordpara[0] == "#" || anboSearchId == "782069343478480916") {
            questionFromUser = questionFromUser.substring(2)
            re = RegExp(questionFromUser, "g");
            resString = element.match(re)
            console.log(resString)
            if (resString == null) {
                spfreepass = false

            } else {
                spfreepass = true;

            }


        }


        if ((element == questionFromUser) || spfreepass) {
            totalCount = totalCount + 1





            foundAnswer = anboAnsMsgIDlist[count]

            if (Array.isArray(foundAnswer)) {
                if (imageSresultAnswer.length != 0 && matchCountimage == 0) { imageSresultAnswer = [] }


                plural = " ";
                pluralimage = " ";
                if (matchCountimage > 1) { pluralimage = "es " }
                if (matchCounttext > 1) { plural = "es " }
                matchCountimage = matchCountimage + 1


                imageSresultQuestion = element;
                imageSresultAnswer = imageSresultAnswer.concat(foundAnswer);

                anboImageAnsfound = true;
                imagematchfound = true;



            } else {
                matchCounttext = matchCounttext + 1


                tempAnboSresult.push(foundAnswer);
                ohNovalue = false;
            }



        }
        count = count + 1;



    });

    if (imagematchfound == true) {
        message.channel.send('**' + "```diff" + '\n' + "+ " + matchCountimage + " (Image Answer) Match" + pluralimage + "Found👇" + "\n" + "```" + '**' + '\n' + "If u want to see that 📝image answers Type--> **Y**" + "\n" + ".");
        imagematchfound = false;

    }




    if (ohNovalue == false) {
        plural = " ";
        if (matchCountimage > 1) { pluralimage = "es " }
        if (matchCounttext > 1) { plural = "es " }
        if (totalCount > 1) { plural = "es " }

        message.channel.send('**' + "```diff" + '\n' + "+ " + matchCounttext + " Match" + plural + "Found👇" + '\n' + "```" + '**' + '\n' + tempAnboSresult + "\n" + '**' + "```diff" + '\n' + "+ " + "Total " + totalCount + " Match" + plural + "Found👆" + '\n' + "```" + '**' + '\n');
    }
    if (questionFromUser != "msgDelete") {

        if (ohNovalue && anboSearchId == "782069343478480916") {



            message.channel.send('**' + "```css" + '\n' + "[OH NO! No One Answered Yet🧐]" + '\n' + "```" + '**' + '\n' + ".");
        }
    }
    console.log(message.content);
    if ((message.content == "y" || message.content == "Y") && anboImageAnsfound == true) {

        console.log(imageSresultAnswer);
        message.channel.send(imageSresultQuestion, { files: imageSresultAnswer })
        anboImageAnsfound = false;
        imageSresultAnswer = [];
    }


})



bot.on('message', message => {

    let commandWord = message.content.substring(PREFIX.length).split(" ");
    let tableEchoHeaderPara = message.content.split("\n");
    let tabelEchoHeader = tableEchoHeaderPara[1];
    links = commandWord[0].toLowerCase();

    switch (links) {

        case 'aums':
            message.delete();
            message.channel.send('https://aumscb.amrita.edu/aums/Jsp/Core_Common/indexIPad.jsp?task=off').then(msg => {
                msg.delete({ timeout: 10000 })
            });
            break;
        case 'ample':
            message.delete();
            message.channel.send('https://ample.amrita.edu/ssologin?tenant=CB' + "\n" + 'https://ample.amrita.edu/ssologin?tenant=CB').then(msg => {
                msg.delete({ timeout: 10000 })
            });
            break;
        case 'intranet':
            message.delete();
            message.channel.send('https://intranet.cb.amrita.edu/' + "\n" + 'https://intranet.cb.amrita.edu/').then(msg => {
                msg.delete({ timeout: 10000 })
            });
            break;
        case 'exam':
            message.delete();
            message.channel.send('https://exam.amrita.ac.in/' + "\n" + 'https://exam.amrita.ac.in/').then(msg => {
                msg.delete({ timeout: 10000 })
            });
            break;
        case 'cms':
            message.delete();
            message.channel.send('https://cms.cb.amrita.edu/login' + "\n" + 'https://cms.cb.amrita.edu/login').then(msg => {
                msg.delete({ timeout: 10000 })
            });
            break;
        case 'gak':
            message.delete();
            message.channel.send('https://arvinth-krishna.github.io/amritalinks/' + "\n" + 'https://arvinth-krishna.github.io/amritalinks/').then(msg => {
                msg.delete({ timeout: 10000 })
            });
            break;
        case 'start':
            message.channel.send("👋Hey, I'm Anbo" + "\n" + "- Answer Assistant bot" + "\n" + "**I will track the Answer** which is tagged to the question." + "\n" +
                "And also **PIN the ANSWER with the FULL QUESTION**" + "\n" + "\n" + "And I have more functionality like to open" + "\n" + " AUMS, CMS, AMPLE and Intranet" + "\n" + "By adding **'#'** " + "\n" + "eg: #ample");
            break;
        case 'lre':
            message.delete();
            bot.channels.cache.get('781809921309278208').send("Let's Roast Exams🔥");
            bot.channels.cache.get('780352246546169859').send("Let's Roast Exams🔥");
            bot.channels.cache.get('781526136898453525').send("Let's Roast Exams🔥");
            break;
        case 'lreAll':
            message.delete();
            bot.channels.cache.get('781809921309278208').send("Let's Roast Exams🔥");
            bot.channels.cache.get('780352246546169859').send("Let's Roast Exams🔥");
            bot.channels.cache.get('781526136898453525').send("Let's Roast Exams🔥");
            bot.channels.cache.get('784643032539988029').send("Let's Roast Exams🔥");
            bot.channels.cache.get('784643725426294815').send("Let's Roast Exams🔥");
            bot.channels.cache.get('784644311177232394').send("Let's Roast Exams🔥");
            bot.channels.cache.get('784644490841292800').send("Let's Roast Exams🔥");
            break;
        case "lregak":
            message.delete();
            bot.channels.cache.get('781018226988941314').send("Let's Roast Exams🔥");
            break;
        case "elective":
            message.delete();
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#FFFF00')
                .setTitle('Select Your Elective😇!!')
                .setDescription(":one: **- Advanced Materials & Processes**" + "\n" + "\n" +
                    ":two: **- Automotive Chassis Design**" + "\n" + "\n" +
                    ":three: **- IT Essentials**" + "\n" + "\n" +
                    ":four: **- Lean Manufacturing**" + "\n" + "\n" +
                    ":five: **- Supply Chain Management**" + "\n" + "\n" +
                    ":six: **- Theory of Elasticity**" + "\n" + "_" + "\n")
                .setFooter("Oii grp of companies ltd")
            message.channel.send(exampleEmbed)
            break;
        case "mechtt":
        case "mech":
        case "mee":
            console.log("im in timetable")
            message.delete();
            message.channel.send("", { files: ["https://cdn.discordapp.com/attachments/787217077239808011/789723460875452426/BTechMEEUpdateTT_1.png"] }).then(msg => {
                msg.delete({ timeout: 60000 })
            });
            break;
        case "academiccalendar":
        case "ac":
        case "calendar":
            console.log("im inside the calendar")
            message.delete();
            message.channel.send("https://drive.google.com/file/d/1YrB7PzhVEB_4hH95_gxuL405_t87RMzT/view?usp=drivesdk").then(msg => {
                msg.delete({ timeout: 20000 })
            });
            break;
        case "lecture":
        case "lv":
        case "class":
            message.delete();
            const lectureVideos = new Discord.MessageEmbed()
                .setColor('#3282b8')
                .setTitle('Lecture Recordings✌!!   (#lecture)')
                .setDescription("\n" + "[Control Engineering](https://bit.ly/ceLectureRecordings)" + " -- [Notes](https://drive.google.com/drive/folders/1RJRIEU-ZBlO-jbQ0od68lpqKz4l2URRO?usp=sharing) " + "\n" + "\n" +
                    "[Operations Research for Mech C & D](https://bit.ly/oprLectureRecordings)" + " -- [Notes](https://drive.google.com/drive/folders/1F7o3tXRK_SuQzor8I59mqkeBK9AR58nf?usp=sharing) " + "\n" + "\n" +
                    "[Lean Manufacturing](https://bit.ly/leLectureVideos)" + " -- [Notes](https://drive.google.com/drive/folders/1eWpRbPHj5ihvp81B-ltlE0O70w1gqiSr?usp=sharing) " + "\n" + "\n" +
                    "[Advanced Materials & Processes](https://bit.ly/ampLectureRecordings)" + " -- [Notes](https://drive.google.com/drive/folders/1POq3ztXv2OOEjtKV_p7hol8fQLX9sIJ-?usp=sharing) " + "\n" + ".")
                .setFooter("🕉 Namah Shivaya")
            message.channel.send(lectureVideos).then(sentEmbed => {
                sentEmbed.react("790605687641735188")

            })
            break;
        case "ttecho":
            bot.channels.cache.get('787705631632523285').send(tabelEchoHeader);
            break;



    }




})

bot.on('message', message => {
    words = message.content.split(" ");

    if (("Exam Time" == message.content || "TT Pause" == message.content) && (message.channel.id == '787705631632523285' || message.channel.id == '787561621899837461' || message.channel.id == '787217077239808011')) {
        message.channel.send("TimeTable is paused");
        clearInterval(interval);
    }


    if ("sat=" == words[0].toLowerCase() && (message.channel.id == '787705631632523285' || message.channel.id == '787561621899837461' || message.channel.id == '787217077239808011')) {
        thisSaturday = words[1].toLowerCase();
        switch (thisSaturday) {
            case 'mon':
                dayText = "Monday";
                break;
            case "tue":
                dayText = "Tuesday";
                break;
            case "wed":
                dayText = "Wednesday"
                break;
            case 'thur':
                dayText = "Thursday";
                break;
            case "fri":
                dayText = "Friday";
                break;
            default:
                dayText = "❓day"
        }
        message.channel.send("This SATURDAY is our New " + dayText + "!" + "\n" + "(noted)😉👍")
    } else if ("#cel1" == words[0]) {
        ControlELink1st = words[1]
    } else if ("#cel2" == words[0]) {
        ControlELink2st = words[1]
    } else if ("#oprl1" == words[0]) {
        oprLink1 = words[1]
    } else if ("#oprl2" == words[0]) {
        oprLink2 = words[1]
    } else if ("#celReset" == words[0]) {
        ControlELink1st = "none"
        ControlELink2st = "none"
    } else if ("#oprReset" == words[0]) {
        oprLink1 = "none"
        oprLink2 = "none"
    }
    if (message.content === "Timetable ON" && (message.channel.id == '787705631632523285' || message.channel.id == '787561621899837461' || message.channel.id == '787217077239808011')) {
        message.delete()
        var interval = setInterval(() => {
            d = new Date();
            hr = d.getHours();
            min = d.getMinutes();
            sec = d.getSeconds();
            day = d.getDay();

            tableValue = 0;
            tableTodaySValue = 0;

            console.log(hr + " " + min + " " + sec + " " + day);
            switch (day) {
                case 0:
                    if ((hr == 0 && min == 0) || (hr == 4 && min == 0)) {
                        thisSaturday = "none";
                        oprLink1 = "none"
                        oprLink2 = "none"
                        ControlELink1st = "none"
                        ControlELink2st = "none"
                    } else if (hr == 17 && min == 30) {
                        colour = '#ff4646';
                        message.channel.send('**' + "```diff" + '\n' + "+ Tomorrow's Timetable!!" + "\n" + "```" + '**')
                        tableHeader = "**Monday's TimeTable**" +
                            "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242) / Elective VI" +
                            "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242) / IT Essentials(377)" +
                            "\n" + "\n" + "3) **11:00-11:50am** -- Control Engineering(402)" +
                            "\n" + "\n" + "4) **12:00-12:50pm** -- IT Essentials(377)" +
                            "\n" + "\n" + "5) **2:00-2:50pm** -- Elective VI" +
                            "\n" + "\n" + "6) **3:00-3:50pm** -- Control Engineering(402)" +
                            "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                        tableTodaySValue = 1
                    }

                    break;
                case 6:
                    if (thisSaturday != "none") {
                        if (hr == 6 && min == 30) {
                            message.channel.send('**' + "```diff" + '\n' + "+ Today is a Working Day!!" + "\n" + "```" + '**')
                        }
                    }
                case 5:
                    if (day == "5" || thisSaturday == "fri") {
                        if (hr == 6 && min == 30) {
                            colour = '#0099ff';

                            tableHeader = "**Friday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)/ IT Essentials(377)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- Operations Research(411)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- IT Essentials(377)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Elective VI" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                            tableTodaySValue = 1
                            break;
                        } else if (hr == 8 && min == 40) {
                            colour = '#0099ff';
                            slot = 1;
                            periodName = "TOE(242)/ Elective VI"
                            Stime = "8:50-9:40am"
                            tableValue = 1

                        } else if (hr == 9 && min == 40) {
                            colour = '#0099ff';
                            slot = 2;
                            periodName = "TOE(242)/ IT Essentials(377)"
                            Stime = "9:50-10:40am"
                            tableValue = 1

                        } else if (hr == 10 && min == 50) {
                            colour = '#0099ff';
                            slot = 3;
                            if (oprLink1 == "none" && day != 6) { oprLink1 = "https://bit.ly/OPfriLink1MsTeams" } else if (oprLink1 == "none" && day == 6) { oprLink1 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + oprLink1
                            Stime = "11:00-11:50am"
                            tableValue = 1

                        } else if (hr == 11 && min == 50) {
                            colour = '#0099ff';
                            slot = 4;
                            periodName = "IT Essentials(377)"
                            Stime = "12:00-12:50pm"
                            tableValue = 1

                        } else if (hr == 13 && min == 50) {
                            colour = '#0099ff';
                            slot = 5;
                            periodName = "Elective VI"
                            Stime = "2:00-2:50pm"
                            tableValue = 1

                        } else if (hr == 14 && min == 50) {
                            colour = '#0099ff';
                            slot = 6;
                            if (ControlELink1st == "none") { ControlELink1st = "https://bit.ly/CEfriLink1MsTeams" }
                            periodName = "Control Engineering(402)" + "\n" + "\n" + "For all Sections👇" + "\n" + ControlELink1st
                            Stime = "3:00-3:50pm"
                            tableValue = 1

                        } else if (hr == 15 && min == 50) {
                            colour = '#0099ff';
                            slot = 7;
                            if (oprLink2 == "none" && day != 6) { oprLink2 = "https://bit.ly/OPfriLink2MsTeams" } else if (oprLink2 == "none" && day == 6) { oprLink2 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + oprLink2
                            Stime = "4:00-4:50pm"
                            tableValue = 1
                            oprLink1 = "none"
                            oprLink2 = "none"
                            ControlELink1st = "none"
                            ControlELink2st = "none"

                        } else if ((hr == 19 && min == 30) && day != 6) {
                            message.channel.send('**' + "```diff" + '\n' + "+ Tommorow is a Working Day!!" + "\n" + "```" + '**')
                            if (thisSaturday = "fri") {
                                colour = '#0099ff';

                                tableHeader = "**Friday's TimeTable**" +
                                    "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ Elective VI" +
                                    "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)/ IT Essentials(377)" +
                                    "\n" + "\n" + "3) **11:00-11:50am** -- Operations Research(411)" +
                                    "\n" + "\n" + "4) **12:00-12:50pm** -- IT Essentials(377)" +
                                    "\n" + "\n" + "5) **2:00-2:50pm** -- Elective VI" +
                                    "\n" + "\n" + "6) **3:00-3:50pm** -- Control Engineering(402)" +
                                    "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                                tableTodaySValue = 1
                                break;
                            }

                            friTomHeader = true;




                        }


                    }

                case 1:
                    if (day == "1" || thisSaturday == "mon") {

                        if ((hr == 6 && min == 30) || friTomHeader) {
                            colour = '#ff4646';
                            today = "Monday's TimeTable"
                            tableHeader = "**Monday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242) / Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242) / IT Essentials(377)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- Control Engineering(402)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- IT Essentials(377)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Elective VI" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                            tableTodaySValue = 1

                        } else if (hr == 8 && min == 40) {
                            colour = '#ff4646';
                            slot = 1;
                            periodName = "TOE(242) / Elective VI"
                            Stime = "8:50-9:40am"
                            tableValue = 1
                        } else if (hr == 9 && min == 40) {
                            colour = '#ff4646';
                            slot = 2;
                            periodName = "TOE(242) / IT Essentials(377)"
                            Stime = "9:50-10:40am"
                            tableValue = 1
                        } else if (hr == 10 && min == 50) {
                            colour = '#ff4646';
                            slot = 3;
                            if (ControlELink1st == "none") { ControlELink1st = "https://bit.ly/CEmonLink1MsTeams" }
                            periodName = "Control Engineering(402)" + "\n" + "\n" + "For all Sections👇" + "\n" + ControlELink1st
                            Stime = "11:00-11:50am"
                            tableValue = 1
                        } else if (hr == 11 && min == 50) {
                            colour = '#ff4646';
                            slot = 4;
                            periodName = "IT Essentials(377)"
                            Stime = "12:00-12:50pm"
                            tableValue = 1
                        } else if (hr == 13 && min == 50) {
                            colour = '#ff4646';
                            slot = 5;
                            periodName = "Elective VI"
                            Stime = "2:00-2:50pm"
                            tableValue = 1
                        } else if (hr == 14 && min == 50) {
                            colour = '#ff4646';
                            slot = 6;
                            if (ControlELink2st == "none") { ControlELink2st = "https://bit.ly/CEmonLink2MsTeams" }
                            periodName = "Control Engineering(402)" + "\n" + "\n" + "For all Sections👇" + "\n" + ControlELink2st
                            Stime = "3:00-3:50pm"
                            tableValue = 1
                        } else if ((hr == 17 && min == 30) && day != 6) {
                            colour = '#61b15a';
                            message.channel.send('**' + "```diff" + '\n' + "+ Tomorrow's Timetable!!" + "\n" + "```" + '**')
                            tableHeader = "**Tuesday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- Operations Research(411)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- A,B,D(Mentoring) & C(Free🥳)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 15 && min == 50) {
                            colour = '#ff4646';
                            slot = 7;
                            if (oprLink1 == "none" && day != 6) { oprLink1 = "https://bit.ly/OPmonLink1MsTeams" } else if (oprLink1 == "none" && day == 6) { oprLink1 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + oprLink1
                            Stime = "4:00-4:50pm"
                            tableValue = 1
                        }
                        break;
                    }
                case 2:
                    if (day == "2" || thisSaturday == "tue") {
                        if ((hr == 6 && min == 30) || friTomHeader) {
                            colour = '#61b15a';

                            tableHeader = "**Tuesday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- Operations Research(411)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- A,B,D(Mentoring) & C(Free🥳)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 8 && min == 40) {
                            colour = '#61b15a';
                            slot = 1;
                            periodName = "TOE(242)/ IT Essentials(377)/ Elective VI"
                            Stime = "8:50-9:40am"
                            tableValue = 1
                        } else if (hr == 9 && min == 40) {
                            colour = '#61b15a';
                            slot = 2;
                            periodName = "TOE(242)"
                            Stime = "9:50-10:40am"
                            tableValue = 1
                        } else if (hr == 10 && min == 50) {
                            colour = '#61b15a';
                            slot = 3;
                            periodName = "IT Essentials(377)/ Elective VI"
                            Stime = "11:00-11:50am"
                            tableValue = 1
                        } else if (hr == 11 && min == 50) {
                            colour = '#61b15a';
                            slot = 4;
                            if (oprLink1 == "none" && day != 6) { oprLink1 = "https://bit.ly/OPtueLink1MsTeams" } else if (oprLink1 == "none" && day == 6) { oprLink1 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + oprLink1
                            Stime = "12:00-12:50pm"
                            tableValue = 1
                        } else if (hr == 13 && min == 50) {
                            colour = '#61b15a';
                            slot = 5;
                            if (ControlELink1st == "none") { ControlELink1st = "https://bit.ly/CEtueLink1MsTeams" }
                            periodName = "Control Engineering(402)" + "\n" + "\n" + "For all Sections👇" + "\n" + ControlELink1st
                            Stime = "2:00-2:50pm"
                            tableValue = 1
                        } else if (hr == 14 && min == 50) {
                            colour = '#61b15a';
                            slot = 6;
                            periodName = "A,B,D(Mentoring) & C(Free🥳)"
                            Stime = "3:00-3:50pm"
                            tableValue = 1
                        } else if ((hr == 17 && min == 30) && day != 6) {
                            colour = '#fc8621';
                            message.channel.send('**' + "```diff" + '\n' + "+ Tomorrow's Timetable!!" + "\n" + "```" + '**')
                            tableHeader = "**Wednesday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)/ IT Essentials(377)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- Operations Research(411)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- Elective VI/ IT Essentials(377)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- A,B,D(Free🥳) & C(Mentoring)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Control Engineering(402)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 15 && min == 50) {
                            colour = '#61b15a';
                            slot = 7;
                            if (oprLink2 == "none" && day != 6) { oprLink2 = "https://bit.ly/OPtueLink2MsTeams" } else if (oprLink2 == "none" && day == 6) { oprLink2 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + oprLink2
                            Stime = "4:00-4:50pm"
                            tableValue = 1
                        }
                        break;
                    }
                case 3:
                    if (day == "3" || thisSaturday == "wed") {
                        if ((hr == 6 && min == 30) || friTomHeader) {
                            colour = '#fc8621';

                            tableHeader = "**Wednesday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)/ IT Essentials(377)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- Operations Research(411)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- Elective VI/ IT Essentials(377)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- A,B,D(Free🥳) & C(Mentoring)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Control Engineering(402)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 8 && min == 40) {
                            colour = '#fc8621';
                            slot = 1;
                            periodName = "TOE(242)/ Elective VI"
                            Stime = "8:50-9:40am"
                            tableValue = 1
                        } else if (hr == 9 && min == 40) {
                            colour = '#fc8621';
                            slot = 2;
                            periodName = "TOE(242)/ IT Essentials(377)"
                            Stime = "9:50-10:40am"
                            tableValue = 1
                        } else if (hr == 10 && min == 50) {
                            colour = '#fc8621';
                            slot = 3;
                            if (oprLink1 == "none" && day != 6) { oprLink1 = "https://bit.ly/OPwedLink1MsTeams" } else if (oprLink1 == "none" && day == 6) { oprLink1 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + oprLink1
                            Stime = "11:00-11:50am"
                            tableValue = 1
                        } else if (hr == 11 && min == 50) {
                            colour = '#fc8621';
                            slot = 4;
                            periodName = "Elective VI/ IT Essentials(377)"
                            Stime = "12:00-12:50pm"
                            tableValue = 1
                        } else if (hr == 13 && min == 50) {
                            colour = '#fc8621';
                            slot = 5;
                            Stime = "2:00-2:50pm"
                            if (ControlELink1st == "none") { ControlELink1st = "https://bit.ly/CEwedLink1Msteams" }
                            periodName = "Control Engineering(402)" + "\n" + "\n" + "For all Sections👇" + "\n" + ControlELink1st
                            tableValue = 1
                        } else if (hr == 14 && min == 50) {
                            colour = '#fc8621';
                            slot = 6;
                            periodName = "A,B,D(Free🥳) & C(Mentoring)"
                            Stime = "3:00-3:50pm"
                            tableValue = 1
                        } else if ((hr == 17 && min == 30) && day != 6) {
                            colour = '#9d0191';
                            message.channel.send('**' + "```diff" + '\n' + "+ Tomorrow's Timetable!!" + "\n" + "```" + '**')
                            tableHeader = "**Thursday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- IT Essentials(377)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- Operations Research(411)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- IT Essentials(377)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Control Engineering(402)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 15 && min == 50) {
                            colour = '#fc8621';
                            slot = 7;
                            periodName = "Control Engineering(402)"
                            Stime = "4:00-4:50pm"
                            tableValue = 1
                        }
                        break;
                    }
                case 4:
                    if (day == "4" || thisSaturday == "thur") {
                        if ((hr == 6 && min == 30) || friTomHeader) {
                            colour = '#9d0191';

                            tableHeader = "**Thursday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- IT Essentials(377)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- Operations Research(411)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- IT Essentials(377)/ Elective VI" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- IT Essentials(377)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Control Engineering(402)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 8 && min == 40) {
                            colour = '#9d0191';
                            slot = 1;
                            periodName = "TOE(242)/ IT Essentials(377)/ Elective VI"
                            Stime = "8:50-9:40am"
                            tableValue = 1
                        } else if (hr == 9 && min == 40) {
                            colour = '#9d0191';
                            slot = 2;
                            periodName = "TOE(242)"
                            Stime = "9:50-10:40am"
                            tableValue = 1
                        } else if (hr == 10 && min == 50) {
                            colour = '#9d0191';
                            slot = 3;
                            periodName = "IT Essentials(377)"
                            Stime = "11:00-11:50am"
                            tableValue = 1
                        } else if (hr == 11 && min == 50) {
                            colour = '#9d0191';
                            slot = 4;
                            if (oprLink1 == "none" && day != 6) { oprLink1 = "https://bit.ly/OPthursLink1MsTeams" } else if (oprLink1 == "none" && day == 6) { oprLink1 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + oprLink1
                            Stime = "12:00-12:50am"
                            tableValue = 1
                        } else if (hr == 13 && min == 50) {
                            colour = '#9d0191';
                            slot = 5;
                            periodName = "IT Essentials(377)/ Elective VI"
                            Stime = "2:00-2:50pm"
                            tableValue = 1
                        } else if (hr == 14 && min == 50) {
                            colour = '#9d0191';
                            slot = 6;
                            periodName = "IT Essentials(377)"
                            Stime = "3:00-3:50pm"
                            tableValue = 1
                        } else if ((hr == 17 && min == 30) && day != 6) {
                            colour = '#0099ff';
                            message.channel.send('**' + "```diff" + '\n' + "+ Tomorrow's Timetable!!" + "\n" + "```" + '**')
                            tableHeader = "**Friday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)/ IT Essentials(377)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- Operations Research(411)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- IT Essentials(377)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Elective VI" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 15 && min == 50) {
                            colour = '#9d0191';
                            slot = 7;
                            if (ControlELink1st == "none") { ControlELink1st = "https://bit.ly/CEthursLink2MsTeams" }
                            periodName = "Control Engineering(402)" + "\n" + "\n" + "For all Sections👇" + "\n" + ControlELink1st
                            Stime = "4:00-4:50pm"
                            tableValue = 1
                        }
                        break;
                    }

                case 10:
                    if (day == "1" || thisSaturday == "test") {
                        if ((hr == 6 && min == 30) || friTomHeader) {
                            colour = '#0099ff';

                            tableHeader = "**Friday's TimeTable**" +
                                "\n" + "\n" + "1) **8:50-9:40am** -- TOE(242)/ Elective VI" +
                                "\n" + "\n" + "2) **9:50-10:40am** -- TOE(242)/ IT Essentials(377)" +
                                "\n" + "\n" + "3) **11:00-11:50am** -- Operations Research(411)" +
                                "\n" + "\n" + "4) **12:00-12:50pm** -- Control Engineering(402)" +
                                "\n" + "\n" + "5) **2:00-2:50pm** -- Elective VI" +
                                "\n" + "\n" + "6) **3:00-3:50pm** -- Free🥳" +
                                "\n" + "\n" + "7) **4:00-4:50pm** -- Operations Research(411)" + "\n" + "."

                            tableTodaySValue = 1
                        } else if (hr == 17 && min == 40) {
                            colour = '#0099ff';
                            slot = 1;
                            periodName = "TOE(242)/ Elective VI"
                            Stime = "8:50-9:40am"
                            tableValue = 1
                        } else if (hr == 17 && min == 49) {
                            colour = '#0099ff';
                            slot = 2;
                            periodName = "TOE(242)/ IT Essentials(377)" + "\n" + "\n" + "For Mech C & D Only👇" + "\n" + "https://bit.ly/OPfriLink2MsTeams"
                            Stime = "9:50-10:40am"
                            tableValue = 1
                        } else if (hr == 17 && min == 47) {
                            colour = '#0099ff';
                            slot = 3;
                            if (oprLink1 == "none") { oprLink1 = "https://bit.ly/OPmonLink1MsTeams" } else if (oprLink1 == "none" && day == 6) { oprLink1 = "No Link😝 (not entered)" }
                            periodName = "Operations Research(411)" + "\n" + "\n" + oprLink1
                            Stime = "11:00-11:50am"
                            tableValue = 1
                        } else if (hr == 21 && min == 39) {
                            colour = '#0099ff';
                            slot = 4;
                            if (ControlELink1st == "none") { ControlELink1st = "https://bit.ly/CEmonLink1MsTeams" }
                            periodName = "Control Engineering(402)" + "\n" + ControlELink1st
                            Stime = "12:00-12:50am"
                            tableValue = 1
                        } else if (hr == 21 && min == 37) {
                            colour = '#0099ff';
                            slot = 5;
                            periodName = "Elective VI"
                            Stime = "2:00-2:50pm"
                            tableValue = 1
                        } else if (hr == 21 && min == 35) {
                            colour = '#0099ff';
                            slot = 6;
                            if (ControlELink2st == "none") { ControlELink2st = "https://bit.ly/CEmonLink2MsTeams" } else if (ControlELink2st == "none" && day == 6) { ControlELink2st = "No Link😝 (not entered)" }
                            periodName = "Control Engineering(402)" + "\n" + ControlELink2st
                            Stime = "3:00-3:50pm"
                            tableValue = 1
                        } else if (hr == 21 && min == 33) {
                            colour = '#0099ff';

                            slot = 7;
                            periodName = "Operations Research(411)"
                            Stime = "4:00-4:50pm"
                            tableValue = 1
                        }
                        break;
                    }



            }
            if (tableValue == 1) {
                const Period = new Discord.MessageEmbed()
                    .setColor(colour)
                    .setTitle("Slot-" + slot + " " + "(" + Stime + ")")
                    .setDescription("." + "\n" +
                        "**" + periodName + "**" + "\n")

                bot.channels.cache.get('787705631632523285').send(Period).then(msg => {
                    msg.delete({ timeout: 3560000 })
                });
                onlyPeriodSplit = periodName.split("\n")
                onlyPeriod = onlyPeriodSplit[0]

                setTimeout(() => {
                    bot.channels.cache.get('787705631632523285').send("🔔-**" + onlyPeriod + "**" + "\n" + "🤘Class Started...Guyzz!!").then(msg => {
                        msg.delete({ timeout: 60000 })
                    });
                }, 600000)

            }
            if (tableTodaySValue == 1) {
                friTomHeader = false;
                const Period = new Discord.MessageEmbed()
                    .setColor(colour)

                .setAuthor("Amrita Links-GAK", 'https://raw.githubusercontent.com/Arvinth-Krishna/amritalinks/master/images/favicon-96x96.png', "https://arvinth-krishna.github.io/amritalinks/", )
                    .setDescription(tableHeader)

                .setFooter("Type--> #mech to see the Timetable")

                bot.channels.cache.get('787705631632523285').send(Period)

            }

            if (hr == 6 && min == 29) {
                if (day != 6) {
                    oprLink1 = "none"
                    oprLink2 = "none"
                    ControlELink1st = "none"
                    ControlELink2st = "none"
                }
                console.log("im inside autodelete")
                message.channel.messages.fetch({ limit: 100 })
                    .then(fetched => {

                        const notPinneds = fetched.filter(fetchedMsg => !fetchedMsg.pinned);

                        message.channel.bulkDelete(notPinneds, true);

                    })
                    .catch(console.error);
            }


        }, 60000);
    }
});



bot.on('messageReactionAdd', async(reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    console.log(reaction)

    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == "784412254589812746") {
        if (reaction.emoji.name == '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("784405626318618624")
        } else if (reaction.emoji.name == '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("784405736075558932")
        } else if (reaction.emoji.name == '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("784405825710981150")
        } else if (reaction.emoji.name == '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("784405862588481546")
        } else if (reaction.emoji.name == '5️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("784405914069368843")
        } else if (reaction.emoji.name == '6️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("784411672856887326")
        }


    }



})


bot.on('messageReactionRemove', async(reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    console.log(reaction)

    if (!reaction.message.guild) return;


    if (reaction.message.channel.id == "784412254589812746") {
        if (reaction.emoji.name == '1️⃣') {

            await reaction.message.guild.members.cache.get(user.id).roles.remove("784405626318618624")
        } else if (reaction.emoji.name == '2️⃣') {

            await reaction.message.guild.members.cache.get(user.id).roles.remove("784405736075558932")
        } else if (reaction.emoji.name == '3️⃣') {

            await reaction.message.guild.members.cache.get(user.id).roles.remove("784405825710981150")
        } else if (reaction.emoji.name == '4️⃣') {

            await reaction.message.guild.members.cache.get(user.id).roles.remove("784405862588481546")
        } else if (reaction.emoji.name == '5️⃣') {

            await reaction.message.guild.members.cache.get(user.id).roles.remove("784405914069368843")
        } else if (reaction.emoji.name == '6️⃣') {

            await reaction.message.guild.members.cache.get(user.id).roles.remove("784411672856887326")
        }


    }



})
bot.login(process.env.TOKEN);
