export type User = {
    name: string;
    email: string;
    password: string;
    isConnected?: boolean | null;
};

type Action =
  | { type: "CREATE"; data: User }
  | { type: "UPDATE"; data: Partial<User> }
  | { type: "UPDATE_CONNECTION"; data: { isConnected: boolean } };

export function userReducer(state: User, action: Action): User {
    switch (action.type) {
        case "CREATE":
            return { ...action.data };
        case "UPDATE":
            return { ...state, ...action.data };
        case "UPDATE_CONNECTION":
            return { ...state, isConnected: action.data.isConnected };
        default:
            return state;
    }
}
