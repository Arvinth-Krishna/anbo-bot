const { Client, MessageAttachment } = require('discord.js');
const bot = new Client();


const PREFIX = '?';
const Prefix ="!";

anboQuestionList=[];
anboAnsMsgIDlist=[];
imageSresultAnswer=[];
anboPinValue=0;
anboImageAnsfound=false;
imagematchfound=false;

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message',message=>{
    if (message.author.bot) return;
    if(message.channel.id=='781026992786243584'){message.channel.send("No no no!! 😊I'm too shy to chat alone...");
    message.channel.send(". \nSo let's chat in **#🔍_anbo-search** channel✌ in [Oii grp of companies ltd](<https://discord.com/channels/780352246546169856/781451444888666123/781452522623074335>) group");
}
})

bot.on("message",message=>{
    if(message.content=="RestartDatabase1221"){
        message.delete();
        anboQuestionList=[];
anboAnsMsgIDlist=[];
imageSresultAnswer=[];
anboPinValue=0;
anboImageAnsfound=false;
imagematchfound=false;
message.channel.send("Database Restarted Successfully🤟")
    }
})

bot.on('message', message=>{
    if(message.content === "anbopinON"){
        message.delete();
        message.channel.send("✔ Anbo Pins have turned ON Successfully");
       anboPinValue=1
    }else if(message.content === "anbopinOFF"){
        message.delete();
        message.channel.send("❌ Anbo Pins have turned OFF Successfully");
        anboPinValue=0

    }
})


bot.on('message', message=>{
    if(message.content === "pinDelete"){
        message.delete();
        message.channel.messages.fetch({ limit: 100 })
  .then(fetched => {
    const notPinned = fetched.filter(fetchedMsg => fetchedMsg.pinned);

    message.channel.bulkDelete(notPinned, true);
    
  })
  .catch(console.error);
    }
})


bot.on('message', message=>{
    if(message.content === "msgDelete"){
        message.channel.messages.fetch({ limit: 100 })
  .then(fetched => {

    const notPinneds = fetched.filter(fetchedMsg => !fetchedMsg.pinned);

    message.channel.bulkDelete(notPinneds, true);
    
  })
  .catch(console.error);
    }
})

bot.on('message', message=>{
    if(message.content === "pinit"){
        
        
        if(message.reference != null){
            let flagedMsgId=message.reference.messageID;

            message.channel.messages.fetch(flagedMsgId)

             .then(message => {
                if(message.attachments.size == 0){
                anbomsg=message.content;
                 message.channel.send(message.content)
                 
                 .then((message) => {
                    if(true){
                    message.pin()}
                    if(anboPinValue==1){bot.channels.cache.get('781442701391298580').send(anbomsg);}

                    anboMAINmsg=anbomsg.split('\n');

        anboQmsg=anboMAINmsg[0];
    if(anboQmsg=="" ){anboQmsg=anboMAINmsg[1]}
        
        anboQuestionList.push(anboQmsg);

        let anboPINEDansMsgId=message.id;

        

        message.channel.messages.fetch(anboPINEDansMsgId)
            .then(message => {
                anboAnsMsgIDlist.push(message.content);
              
            })

                    


                   
                });

        }else{message.channel.send("This 💡Feature is not yet released for Attachments."+"\n"+"-WORKING ON IT"+"\n"+"***Stay Tuned!!***")}
    })

        }
    }
})

pinWarningValue=0;




bot.on('message', message=>{
    if (message.author.bot) return;
    


    attachmentTorF=false;
   
      
    if(message.attachments.size != 0){
        tempAttachmentFileList=[]
        attachmentTorF=true;
    

        message.attachments.forEach(function(attachment) {
            tempAttachmentFileList.push(attachment.url);
            
          })

          console.log(tempAttachmentFileList);
        
    }

 
    

freeEntry=false;

    let args = message.content.substring(Prefix.length).split(" ");
    listline=message.content.split("\n");
    answerName=listline[0];
    answerdes=message.content;
    list=message.content.split(" ");
    if(list[0][0]=="$"){ freeEntry="$";}else if(list[0][0]=="!"){ freeEntry="!";}

    
            

if(message.reference != null){

    
    let flagedMsgId=message.reference.messageID;
    orginalUsername=message.author.username;
    let guild =message.guild;
let member = guild.member(message.author);

let nickname = member ? member.displayName : null;
if(nickname == orginalUsername){oUN=""}else{oUN=" "+"("+orginalUsername+")";};

whoanswered= nickname+oUN;
whoRepliedBot=nickname;
    who=whoanswered; 
    console.log(nickname);

    message.channel.messages.fetch(flagedMsgId)
  .then(message => {
      
      description=message.content;
    listAns=message.content.split("\n");
   
    options=listAns.length;
    
    freepass=false;
    answer=list[0].toLowerCase();
    switch(freeEntry){
        case "$":
            answer="$";
            freepass=true;
            break;
        case "!":
            answer="!"
            freepass=true;
            break;
        default:
            break;
    }
    if(answer != "!"){
    if (list.length != 1 && answer != "$" && freepass){return;}}
    useranswer=list[0].toLowerCase();
    if (options>5||freepass=="!"){
        answer = "multi";
    }
    
    if (options!=1 || (list[0]=="$"|| list[0]=="!"||freepass)){
    if((answer == 'a' || answer == 'b') || (answer == '$' || answer == 'h')|| (answer == 'c' || answer == 'd')|| (answer == 'e' || answer == '!')||(answer == 'n' || answer == 's')||(answer == 'v' || answer == 's')||(answer == 'f' || answer == 'h')||(answer == 'multi' || answer == 'g')){
        pinValue=1;
        

    switch(answer){
        case 'a':
            Ans= '**'+"```fix"+'\n' +listAns[1] +'\n' +"```"+'**'+'\n' + listAns[2] +'\n' + listAns[3]+'\n' + listAns[4];
             break;
         case 'b':
            Ans= listAns[1]+'\n'+'**'+"```fix"+'\n' + listAns[2] +'\n' +"```"+'**'+'\n' + listAns[3]+'\n' + listAns[4];
             break;
         case 'c':
            Ans= listAns[1] +'\n' + listAns[2] +'\n' +'**'+"```fix"+'\n' + listAns[3]+'\n' +"```"+'**'+'\n' + listAns[4];
             break;
         case 'd':
            Ans= listAns[1] +'\n' + listAns[2] +'\n' + listAns[3]+'\n' +'**'+"```fix"+'\n' + listAns[4]+'\n' +"```"+'**';
                 break;
          case 'notq':
                          
                  break;
         case '!':
                Ans= listAns[1] +'\n' + listAns[2] +'\n' + listAns[3]+'\n' + listAns[4]+'\n'+'\n'+'**'+"```css"+'\n' + "[Answer is not sure]"+'\n' +"```"+'**';
                 break;
         case "$":
             Ans=description;
             listAns[0]="";
                    break;
         case 'multi':
                 Ans=description;
                 listAns[0]="";
                break;

             
        default :
                  Ans=listAns[1] +'\n' + listAns[2] +'\n' + listAns[3]+'\n' + listAns[4]+'\n'+'\n'+'**'+'invalid Option'+'**';
                  pinValue=0;
         
            
    }
     
    if (message.author.bot) {
        message.channel.send("**"+whoRepliedBot+"**"+", Pls don't reply to my message🤠... Do reply to others✌");
         return;}

         if(answer == "multi"){
             if ((useranswer == 'a' || useranswer == 'b') || (useranswer == 'c' || useranswer == 'd')|| (useranswer == '$' || useranswer == 'd')){
                 answer="multiC"
             }else if(useranswer == '!'){
                anbomsg=listAns[0] +'\n' +Ans+'\n'+'\n'+'**'+"```css"+'\n' + "[Answer is not sure]"+'\n' +"```"+'**'+'\n'+"Answered by ➪"+who+'\n'+ 'ミ★ ------------------------------------------------- ★彡'

             }else{
                 return;
             }
         }

         
        if((answer != "$" && answer !="multiC")){     anbomsg=listAns[0] +'\n' +Ans+'\n'+'\n'+"🥳"+ '**Answer: **'+answerName.toUpperCase()+'\n'+"Answered by ➪"+who+'\n'+ 'ミ★ ------------------------------------------------- ★彡'
        }else if(attachmentTorF){
            linkINtext="";
            tempAttachmentFileList.forEach(element => {
                linkINtext=linkINtext+element;
                
            });
           
            
            anbomsg=message.content
        }else{
            anbomsg=listAns[0] +'\n' +Ans+'\n'+'\n'+"🥳"+ '**Answer: **'+answerdes+'\n'+"Answered by ➪"+who+'\n'+ 'ミ★ ------------------------------------------------- ★彡'
        }

        if(attachmentTorF== true){
            message.channel.send(message.content,{files:tempAttachmentFileList})
            .then((message)=>{
                if(pinValue ==1){
                    message.pin()
                }

                if(anboPinValue==1){bot.channels.cache.get('781442701391298580').send(message.content,{files:tempAttachmentFileList});}

                anboMAINmsgimageQ=anbomsg.split('\n');

        anboQmsg=anboMAINmsgimageQ[0];
    if(anboQmsg=="" ){anboQmsg=anboMAINmsgimageQ[1]}
        
        anboQuestionList.push(anboQmsg);

             
                               
        anboAnsMsgIDlist.push(tempAttachmentFileList)
    




            });
            
        }


    if(attachmentTorF!= true){
    message.channel.send(anbomsg)
    .then((message) => {
        if(pinValue==1){
            
        message.pin()
    }
        if(anboPinValue==1){bot.channels.cache.get('781442701391298580').send(anbomsg);}

        anboMAINmsg=anbomsg.split('\n');

        anboQmsg=anboMAINmsg[0];
    if(anboQmsg=="" ){anboQmsg=anboMAINmsg[1]}
        
        anboQuestionList.push(anboQmsg);

        let anboPINEDansMsgId=message.id;

        

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
}}).catch(console.error);
   

}


})






bot.on('message',message=>{
    if (message.author.bot) return;
    

    userInputScnt=message.content;
    mcqORnot=userInputScnt.split('\n');
    
    questionFromUser=mcqORnot[0];
    if(questionFromUser=="" ){questionFromUser=mcqORnot[1]}
    mcqORnotBylen=mcqORnot.length;
    count=0;
    matchCounttext=0;
    matchCountimage=0;
    totalCount=0;
    let anboSearchId=message.channel.id;
    console.log(message.channel.id);
    
ohNovalue=true;
tempAnboSresult=[];


    anboQuestionList.forEach(element => {
        
        
        if(element==questionFromUser){
            totalCount=totalCount+1
            
            
            
        

            foundAnswer=anboAnsMsgIDlist[count]

            if(Array.isArray(foundAnswer)){
                if(imageSresultAnswer.length!=0&&matchCountimage==0){imageSresultAnswer=[]}


                plural=" ";
                pluralimage=" ";
        if(matchCountimage>1){pluralimage="es "}
        if(matchCounttext>1){plural="es "}
        matchCountimage=matchCountimage+1

                
                imageSresultQuestion=element;
                imageSresultAnswer=imageSresultAnswer.concat(foundAnswer);

                anboImageAnsfound=true;
                imagematchfound=true;



            }else{
                matchCounttext=matchCounttext+1


            tempAnboSresult.push(foundAnswer);
             ohNovalue=false;
        }



        } 
        count=count+1;

        
        
    });

    if(imagematchfound==true){
        message.channel.send('**'+"```diff"+'\n' + "+ "+matchCountimage+" (Image Answer) Match"+pluralimage+"Found👇" +"\n"+"```"+'**'+'\n'+"If u want to see that 📝image answers Type--> **Y**"+"\n"+".") ;   
        imagematchfound=false;

    }




    if(ohNovalue==false){
        plural=" ";
        if(matchCountimage>1){pluralimage="es "}
        if(matchCounttext>1){plural="es "}
        if(totalCount>1){plural="es "}
        
        message.channel.send('**'+"```diff"+'\n' + "+ "+matchCounttext+" Match"+plural+"Found👇"+'\n' +"```"+'**'+'\n'+tempAnboSresult+"\n"+'**'+"```diff"+'\n' + "+ "+"Total "+totalCount+" Match"+plural+"Found👆"+'\n' +"```"+'**'+'\n');
    }
    if(questionFromUser!= "msgDelete"){

    if (ohNovalue && anboSearchId == "782069343478480916"){
            

        
         message.channel.send('**'+"```css"+'\n' + "[OH NO! No One Answered Yet🧐]"+'\n' +"```"+'**'+'\n' +".");
    }  
}

})




bot.on("message",message=>{
    if (message.author.bot) return;
    console.log(message.content);
    if((message.content=="y"||message.content=="Y")&&anboImageAnsfound==true){
        
        console.log(imageSresultAnswer);
        message.channel.send(imageSresultQuestion,{files:imageSresultAnswer})
        anboImageAnsfound=false;
        imageSresultAnswer=[];
    }
    
})





bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    links=args[0].toLowerCase();

   switch(links){

       case 'aums':
           message.channel.send('https://aumscb.amrita.edu/aums/Jsp/Core_Common/indexIPad.jsp?task=off');
            break;
        case 'ample':
            message.channel.send('https://ample.amrita.edu/ssologin?tenant=CB'+"\n"+'https://ample.amrita.edu/ssologin?tenant=CB');
            break;
        case 'intranet':
            message.channel.send('https://intranet.cb.amrita.edu/'+"\n"+'https://intranet.cb.amrita.edu/');
            break;
        case 'exam':
                message.channel.send('https://exam.amrita.ac.in/'+"\n"+'https://exam.amrita.ac.in/');
                break;
        case 'cms':
                message.channel.send('https://cms.cb.amrita.edu/login'+"\n"+'https://cms.cb.amrita.edu/login');
                break;
        case 'gak':
               message.channel.send('https://arvinth-krishna.github.io/amritalinks/'+"\n"+'https://arvinth-krishna.github.io/amritalinks/');
               break;
        case 'start':
               message.channel.send("👋Hey, I'm Anbo"+"\n"+"- Answer Assistant bot"+"\n"+"**I will track the Answer** which is tagged to the question."+"\n"+
               "And also **PIN the ANSWER with the FULL QUESTION**"+"\n"+"\n"+ "And I have more functionality like to open"+"\n"+" AUMS, CMS, AMPLE and Intranet"+"\n"+ "By adding **'#'** "+"\n"+"eg: #ample");
               break;
        
           
   }

})

bot.login(process.env.TOKEN);
