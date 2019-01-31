import UserRepository from '../repositories/user/UserRepository'

export default function seedData(){
    const user = new UserRepository();
    user.create({_id: '3', name:'admin3'})
}