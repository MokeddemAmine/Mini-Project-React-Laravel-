<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as RulesPassword;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'  => ['required','string','max:55'],
            'email' => ['required','email','unique:users,email'],
            'password' => [
                'required',
                'string',
                'confirmed',
                RulesPassword::min(8)
                ->letters()
                ->symbols()
            ],
            'password_confirmation' => ['required','string','min:8']

        ];
    }
}
