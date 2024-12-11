const mongoose = require('mongoose');
const Course = require('./models/course');
mongoose.connect('mongodb://localhost:27017/courseCatalog',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const seedCourses = async()=>{
    await Course.insertMany([
        {
            title:'Python Development',
            description:'Python, SQL, Data Analytics (EDA), Machine Learning, Deep Learning, NLP, Gen AI, Power BI, AWS Cloud',
            instructor:'Dev Mohan',
            category:'web development',
            price:45000,
            rating:4.9,
            image:'https://i.postimg.cc/9fW1zrNb/download-9.jpg'
        },
        {
          title:'Java Development',
          description:'Java Fundamentals, OOPS, Advanced Java, Java Database Programming, JDK New Features, JAVA Enterprise Edition (Java EE),',
          instructor:'john',
          category:"web development",
          price:38000,
          rating:4.6,
          image:'https://i.postimg.cc/52mTPchP/download.png'  
        }, 
        {
            title:'MEA(R)N Development',
            description:'HTML, CSS, Bootstrap, Javascript, Typescript, Git, Angular, React.js, Node.js, Express.js & MongoDB',
            instructor:'Susan Dvavid',
            category:'web development',
            price:45000,
            rating:4.8,
            image:'https://i.postimg.cc/BbDwHR5B/pngtree-capabilityheadhumanknowledgeskill-glyph-icon-vector-iso-png-image-1254427.jpg'

        }

    ]);
    console.log('Data seeded');
    mongoose.disconnect();
};
seedCourses();
 