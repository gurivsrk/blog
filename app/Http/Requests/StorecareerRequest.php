<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorecareerRequest extends FormRequest
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
        //// 'vacany_name'=>'required|unique:blog,vacany_name',
        return [
            'vacany_name'=>'required|unique:career,vacany_name',
            'num_of_post'=>'required|digits_between:1,4',
            'category_id'=>'required',
            'descritption'=>'required',
            'post_status'=>'required'
        ];
    }
}
