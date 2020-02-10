let tokens = {};


export const getTokens = (req, res)=>{
    return res.send({tokens})
};

export const postToken = (req, res)=>{
    const { token } = req.body;
    tokens[token] = tokens[token] != null ? tokens[token] + 1 : 1;
    return res.status(201).send({token});
};
