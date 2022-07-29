import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// Models
import User from 'App/Models/User'


export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const body = request.only(['email', 'password','fullName'])

    const user = await User.create({
      email:body.email,
      password:body.password,
      fullName:body.fullName,
    })
    
    return response.created({ data: user })
  }

  public async login({ request, response, auth }: HttpContextContract) {
    // Get Data from body
    const body = request.only(['email', 'password'])

    try {
      // Generate Token
      const token = await auth.use('api').attempt(body.email, body.password, {
        expiresIn: '30days', // Token expired after 30days
      })
      return response.accepted({ email:body.email, token })
    } catch {
      // Password not match it's return error
      return response.badRequest({ error: 'Invalid login credentials' })
    }
  }

  // Get Login User Details
  public async me({ response, auth }: HttpContextContract) {
    try {
      const user = await auth.use('api').authenticate()
      return response.accepted(user)
    } catch {
      return response.badRequest({ error: 'User not login' })
    }
  }
}
