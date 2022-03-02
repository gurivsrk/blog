<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreblogsRequest extends FormRequest
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
            'blogImage'=>'required|max:4120|mimes:jpeg,png,jpg,bmp',
            'title'=>'required|unique:blog,title',
            'categories'=>'required',
            'tags'=>'required',
            'post_status'=>'required',
            'descritption'=>'required'
        ];
    }
}
