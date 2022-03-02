<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreteamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'profileImgT'=>'required|max:4120|mimes:jpeg,png,jpg,bmp',
            'name'=>'required',
            'designation'=>'required',
            'descritption'=>'required'
        ];
    }
}
