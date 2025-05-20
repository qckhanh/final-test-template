

export class UserService {
    static async getAllUsers(
    ): Promise<any> {

        const result =  [
            {id: 1, name: 'Alice', address: '101 Main Street'},
            {id: 2, name: 'Bob', address: '303 Sub Street'},
            {id: 3, name: "Khanh", address: "s4021494RMIT"}
        ];

        return result;
    }
}
