<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSkillRequest extends FormRequest
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
    public function rules()
    {
        return [
            'name' => 'required|min:8|max:20',
            'slug' => 'required|unique:skills,slug,' . $this->skill->id,
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên kỹ năng là bắt buộc.',
            'name.min' => 'Tên kỹ năng phải có ít nhất :min ký tự.',
            'name.max' => 'Tên kỹ năng không được vượt quá :max ký tự.',
            'slug.required' => 'Slug là bắt buộc.',
            'slug.unique' => 'Slug đã tồn tại trong hệ thống.',
        ];
    }
}
