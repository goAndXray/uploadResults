import { validate as isUuid } from 'uuid'
import Chat from '../models/xray.js'

async function validateId(req, res, next){
    const { id } = req.params;

    if(!isUuid(id)){
        return res.status(400).json({ error: 'invalid ID'})
    }
    try{
        const chat = await Chat.findById(id);
        res.chat = chat
        if(!chat){
            return res.status(404).json({ error: 'chat not found!'});
        }
    }catch(err){
        return res.status(500).json({ error: err.message })
    }

    next()
}

export {
    validateId
}