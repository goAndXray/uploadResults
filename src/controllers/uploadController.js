import Chat from '../models/xray.js'
import { v4 as uuid } from 'uuid'


async function index(req, res){
    try{
        const chat = await Chat.find()
        return res.status(200).json({ chat })
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

async function store(req, res){
    
    const { name, email, phoneNumber, levelQuestion, firstQuestion, secondQuestion, thirdQuestion, finalResult } = req.body;

    if(!name || !email){
        return res.status(400).json({error: 'Name & Email required'})
    }

    const chat = new Chat ({
        _id: uuid(),
        name,
        email,
        phoneNumber,
        levelQuestion,
        firstQuestion,
        secondQuestion,
        thirdQuestion,
        finalResult,
    })
    try{
        await chat.save();
        return res.status(201).json({ messagem: `Foi gerado um novo relatorio. ${name} realizou o relatório com successo.`})
    }catch(err){
        res.status(500).json({ error: err.message })
    }

}

async function remove(request, response){

    try{
        await response.chat.deleteOne();
        return response.status(200).json({ message: 'Chat deletado com successo!' })
    }catch(err){
        return response.status(500).json({ error: err.message }) 
        
    }
}

export {
    index,
    store,
    remove, 
}