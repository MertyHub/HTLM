const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Shape3D,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Camera3D,
		C3.Plugins.TiledBg,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Camera3D.Acts.LookAtPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Camera3D.Exps.LookX,
		C3.Plugins.Camera3D.Exps.LookY,
		C3.Plugins.TiledBg.Acts.SetPos,
		C3.Plugins.TiledBg.Acts.AddInstanceVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Behaviors.Platform.Exps.VectorY,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.TiledBg.Acts.SetInstanceVar
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Sprite: 0},
	{Katı: 0},
	{"3DŞekil": 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Klavye: 0},
	{"3DKamera": 0},
	{Xx: 0},
	{Yy: 0},
	{DöşemeliArkaplan: 0},
	{Ses: 0},
	{Water: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	_3DŞekil: class extends self.I3DShapeInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Klavye: class extends self.IInstance {},
	_3DKamera: class extends self.IInstance {},
	DöşemeliArkaplan: class extends self.ITiledBackgroundInstance {},
	Ses: class extends self.IInstance {}
}