const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
/*const {check, validationResult} = require('express-validator')*/
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
   '/register',
   async (req, res) => {
      try {
         const {userName, name, surname, userEmail, password, avatar, userType} = req.body

         const candidateEmail = await User.findOne({userEmail})
         const candidateLogin = await User.findOne({userName})
         if (candidateEmail || candidateLogin) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
         }
         const hashedPassword = await bcrypt.hash(password, 12)
         const user = new User({
            userName,
            name,
            surname,
            userEmail,
            userType,
            avatar,
            password: hashedPassword
         })

         await user.save()
         res.status(201).json({message: 'Пользователь создан, Вы можете войти'})

      } catch (e) {
         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
      }
   })

// /api/auth/login
router.post('/login',
   async (req, res) => {
      try {
         const {login, password} = req.body
         const user = await User.findOne({userEmail: login})

         if (!user) {
            return res.status(400).json({message: 'Пользователь не найден'})
         }

         const isMatch = await bcrypt.compare(password, user.password)

         if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
         }

         const token = jwt.sign(
            { userId: user.id },
            "market 23",
            {expiresIn: '24h'}
         )

         res.json({
            token,
            id: user._id,
            userName: user.userName,
            name: user.name,
            surname: user.surname,
            userEmail: user.userEmail,
            userType: user.userType,
            avatar: user.avatar
         })
      } catch (e) {
         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
      }
   })

module.exports = router
