const User = require('../models/user')

// GET 모든 유저 정보
exports.getAllUsers = async (req, res, next) => {
    try{
        const [allUsers] = await User.fetchAll()
        res.status(200).json(allUsers)
    } catch (err){
        if (!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}

//  POST 유저 생성
exports.postUser = async (req, res, next) => {
    try{
        const postResponse = await User.post(req.body.user_name)
        res.status(200).json(postResponse)
    } catch (err){
        if (!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}

// PUT 유저 수정
exports.putUser = async (req, res, next) => {
    try{
        const putResponse = await User.update(req.body.user_id, req.body.user_name)
        res.status(200).json(putResponse)
    } catch (err){
        if (!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}

// DELETE 유저 삭제
exports.deleteUser = async (req, res, next) => {
    try{
        const deleteResponse = await User.delete(req.params.user_id)
        res.status(200).json(deleteResponse)
    } catch (err){
        if (!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}
