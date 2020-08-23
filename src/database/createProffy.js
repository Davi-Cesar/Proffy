module.exports = async function(db, {proffyValue, classValue, classScheduleValues }) {

    //inserir dados na table de teachers
     const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );

     `)

     const proffy_id =insertedProffy.lastID

     //Inserir dados na tabela classes
     const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
     `)
    
    const class_id = insertedClass.lastID

     // Inserir dados na tabela class_shedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
       /* Cada vez que essa função for rodada ela está se referindo a um 
          objeto que está em classSheduleValues.map() */
        // vai retorna um db.run() sem executa-lo
        return  db.run(`
            INSERT INTO classes_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"

            );
        `)
    })


    //aqui vou executar todos os db.runs() class_shudelures
    await Promise.all(insertedAllClassScheduleValues)
}