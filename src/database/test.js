const Database = require('./db.js');
const createProffy = require('./createProffy');


Database.then(async (db) => {
    // Inserir Dados
    proffyValue = {
        name: "João Paulo",
        avatar: "https://avatars0.githubusercontent.com/u/45275642?s=460&u=0e433a48122375e3ab0b43856c8ca779ac5fd2ec&v=4",
        whatsapp: "89222289",
        bio:"Instutor de Educação Fisica",  
    }
    classValue = {
        subject: 1,
        cost: 20,
        //O proffy_id vem pelo banco de dados
    }

    classSheduleValues = [
        //O class_id vem pelo banco de dados, Após, cadastrar a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        },
    ]
    //await createProffy(db, {proffyValue, classValue, classSheduleValues})

    //Consultar Dados inseridos
    // todos os proffys
    await db.all("SELECT * FROM proffys")

    //Consultar as classes d eum determinado professor 
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
   // console.log(selectClassesAndProffys)

    // O horario que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horario do time_from 18hr precisa ser menor ou igual o horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id = "1"
        AND classes_schedule.weekday = "0"
        AND classes_schedule.time_from <= "420"
        AND classes_schedule.time_to >"620"
    `)
    console.log(selectClassesSchedules)

})