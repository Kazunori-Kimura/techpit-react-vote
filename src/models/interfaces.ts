// 投票データ
export interface VoteResponse {
    id: number;
    questionId: number;
    choiceId: number;
    votedBy: number;
}

// 質問登録データ
export interface ChoiceRequest {
    content: string;
}

// 選択肢データ
export interface ChoiceResponse extends ChoiceRequest {
    id: number;
    createdAt: string;
    updatedAt: string;
}

// 質問登録データ
export interface QuestionRequest {
    sentence: string;
    limit: string;
    Choices: ChoiceRequest[];
}

// 質問データ
export interface QuestionResponse extends Omit<QuestionRequest, 'Choices'> {
    id: number;
    createdBy: number;
    createdAt: string;
    updatedAt: string;
    Choices: ChoiceResponse[];
    Votes?: VoteResponse[];
}

// ユーザー登録データ
export interface UserRequest {
    email: string;
    name: string;
    password: string;
}

// ユーザーデータ
export interface UserResponse extends Omit<UserRequest, 'password'> {
    id: number;
}

// ログインパラメータ
export interface SignInRequest {
    email: string;
    password: string;
}

// ログイン成功
export interface SignInResponse extends UserRequest {
    token: string;
}

// token更新
export interface RefreshTokenResponse {
    token: string;
}
