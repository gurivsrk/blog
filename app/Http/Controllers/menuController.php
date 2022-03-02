<?php

namespace App\Http\Controllers;

use App\Models\menu;
use App\Http\Requests\StoremenuRequest;
use App\Http\Requests\UpdatemenuRequest;

class menuController extends Controller
{

    public function index()
    {
        $menus = Menu::all();
		$current_menu = Menu::find(request('menu'));
        return view('pages.menu',compact('menus', 'current_menu'));
    }

    public function edit(menu $menu)
    {
        return view('pages.menu');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatemenuRequest  $request
     * @param  \App\Models\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatemenuRequest $request, menu $menu)
    {
        $menu->data = $request->data;
        $menu->save();
		return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(menu $menu)
    {
        //
    }
}
