const express = require('express')
const userController = require("../controllers/user")
const router = express.Router()

// // 유저 라우터
// router.get('/', userController.getAllUsers)
// router.post('/', userController.postUser)
// router.put('/', userController.putUser)
// router.delete('/:user_id', userController.deleteUser)

// module.exports = router

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - user_id
 *        - user_name
 *      properties:
 *        user_id:
 *          type: integer
 *          description: 자동으로 증가하는 user_id
 *        user_name:
 *          type: VarChar(255)
 *          description: 유저 이름
 *      example:
 *        user_id: 1
 *        user_name: 준혁
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: 유저 맵핑 API
  */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 모든 유저들 리턴
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 유저 목록 생성 완료
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', userController.getAllUsers)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: 유저 생성
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             item:
 *             example:
 *               user_name: 원빈
 *     responses:
 *       200:
 *         description: 유저 생성 완료
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error 실패
 */
router.post('/', userController.postUser)

/**
 * @swagger
 * /users:
 *  put:
 *    summary: 유저 수정 및 업데이트
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: 유저 수정 및 업데이트 성공
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: 해당 유저를 찾을 수 없음 실패
 *      500:
 *        description: Some error happened 실패
 */
router.put('/', userController.putUser)

/**
 * @swagger
 * /users/{user_id}:
 *   delete:
 *     summary: 유저 삭제
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: user_id
 * 
 *     responses:
 *       200:
 *         description: 유저 삭제 완료
 *       404:
 *         description: 해당 유저를 찾을 수 없음 실패
 */
router.delete('/:user_id', userController.deleteUser)

module.exports = router