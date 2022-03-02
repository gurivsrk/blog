<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class storeCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name" => ['required',
                Rule::unique('category_tag')->where('type',$this->type)
            ],
            "type" => "required",
            "for" => "required",
        ];
    }

    public function messages()
{
    return [
        'For.required' => 'This Field is required',
    ];
}
}
