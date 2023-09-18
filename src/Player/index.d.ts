// Player.d
// Written by Demo (R0BL0XIAN_D3M0)
// [https://www.roblox.com/users/289025524/profile]
// 09/09/2023

// Types
declare namespace PlayerHook {
	export interface Destroyable {
		Destroy(): void;
	}

	export type Object =
		| never
		| undefined
		| ((this: defined) => void)
		| ((_: defined) => void)
		| ExtractKeys<defined, () => void>
		| thread
		| RBXScriptConnection
		| globalThis.Player
		| Player
		| PlayerHook.Destroyable
}

type PlayerHook = {
	/**
		@within Player

		@method RetrieveCharacter

		@return Model -- Return the player's character model.

		Return the player's character.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local Character: Model = player:RetrieveCharacter()
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const Character: Model = player.RetrieveCharacter()
		```
	 */
	RetrieveCharacter<T extends Model>(): Model | T;

	/**
		@within Player

		@method RetrieveHumanoid

		@return Humanoid -- Return the player's humanoid.

		Return the player's character's humanoid.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local Humanoid: Humanoid = player:RetrieveHumanoid()
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			const Humanoid: Humanoid = player.RetrieveHumanoid()
		```
	 */
	RetrieveHumanoid<T extends Humanoid>(): Humanoid | T;

	/**
		@within Player

		@method WaitForCharacter

		@param Callback Callback? -- The specified callback function.

		@return Model | boolean -- Return the player's character model or false.

		Wait for and return the player's character (cancels by default if five attempts fail).

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:WaitForCharacter(function(...: Humanoid | boolean)
				print(...) --> Model | Model.Name

				print(player:RetrieveCharacter().Name) --> Model.Name
			end)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.WaitForCharacter(function (...args: Array<Model | boolean>) {
				print(...args) // --> Model | Model.Name

				print(player.RetrieveCharacter().Name) // --> Model.Name
			})
		```
	 */
	WaitForCharacter<T extends Callback>(Callback?: Callback | T): Model | boolean;

	/**
		@within Player

		@method WaitForHumanoid

		@param Callback Callback? -- The specified callback function.

		@return Humanoid | boolean -- Return the player's humanoid or false.

		Wait for and return the player's characters' humanoid (cancels by default if five attempts fail).

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:WaitForHumanoid(function(...: Humanoid | boolean)
				print(...) --> Humanoid | Humanoid.Name

				player:SetWalkSpeed(1e+1) --> 10
				print(player:RetrieveHumanoid().WalkSpeed) --> 10

				player:SetWalkSpeed(1e+2) --> 100
				print(player:RetrieveHumanoid().WalkSpeed) --> 100
			end)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.WaitForHumanoid(function (...args: Array<Model | boolean>) {
				print(...args) // --> Humanoid | Humanoid.Name

				player.SetWalkSpeed(1e+1) // --> 10
				print(player.RetrieveHumanoid().WalkSpeed) // --> 10

				player.SetWalkSpeed(1e+2) // --> 100
				print(player.RetrieveHumanoid().WalkSpeed) // --> 100
			})
		```
	 */
	WaitForHumanoid<T extends Callback>(Callback?: Callback | T): Humanoid | boolean;

	/**
		@within Player

		@method RetrieveName

		@return string -- Return the player's name.

		Return the player's name.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			print(player:RetrieveName()) --> Player.Name
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			print(player.RetrieveName()) // --> Player.Name
		```
	 */
	RetrieveName<T extends string>(): string | T;

	/**
		@within Player

		@method RetrievePlayer

		@return Player -- Return the player's player object.

		Return the player's `Player` object.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			print(player:RetrievePlayer()) --> Player | Player.Name
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			print(player.RetrievePlayer()) // --> Player | Player.Name
		```
	 */
	RetrievePlayer<T extends Player>(): Player | T;

	/**
		@within Player

		@method RetrieveUserId

		@return number -- Return the player's UserId.

		Return the player's unique UserId.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			print(player:RetrieveUserId()) --> Player.UserId
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			print(player.RetrieveUserId()) // --> Player.UserId
		```
	 */
	RetrieveUserId<T extends number>(): number | T;

	/**
		@within Player

		@method CharacterAdded

		@param Callback Callback? -- The specified callback function.

		Run the specified callback function on the addition of the player's character.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local function Callback()
				print("The character has been added!")
			end

			player:CharacterAdded(Callback)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			function Callback(){
				print(`The character has been added!`)
			}

			player.CharacterAdded(Callback)
		```
	 */
	CharacterAdded<T extends Callback>(Callback?: Callback | T): T | defined;

	/**
		@within Player

		@method HumanoidAdded

		@param Callback Callback? -- The specified callback function.

		Run the specified callback function on the addition of the player's humanoid.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			local function Callback()
				print("The humanoid has been added!")
			end

			player:CharacterAdded(Callback)
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			function Callback(){
				print(`The humanoid has been added!`)
			}

			player.HumanoidAdded(Callback)
		```
	 */
	HumanoidAdded<T extends Callback>(Callback?: Callback | T): T | defined;

	/**
		@within Player

		@method SetJumpPower

		@param power number -- The specified jump-power to use in a numerical value.

		Set the player's jump-power.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:SetJumpPower(JumpPower :: number) --> number
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.SetJumpPower(JumpPower :: number) // --> number
		```
	 */
	SetJumpPower<T extends number>(power: number): T | defined;

	/**
		@within Player

		@method UseJumpPower

		@param value boolean -- The status of whether or not to use the player's jump-power.

		Set whether or not to use the player's jump-power for jump-related adjustments.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:UseJumpPower(Value :: boolean) --> boolean
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.UseJumpPower(Value :: boolean) // --> boolean
		```
	 */
	UseJumpPower<T extends boolean>(value: boolean): T | defined;

	/**
		@within Player

		@method SetJumpHeight

		@param height number -- The specified jump-height to use in a numerical value.

		Set the player's jump-height.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:SetJumpHeight(Height :: number) --> number
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.SetJumpHeight(Height :: number) // --> number
		```
	 */
	SetJumpHeight<T extends number>(height: number): T | defined;

	/**
		@within Player

		@method SetMaxSlopeAngle

		@param angle number -- The specified angle to use in a numerical value.

		Set the player's maximum slope angle.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:SetMaxSlopeAngle(Angle :: number) --> number
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.SetMaxSlopeAngle(Angle :: number) // --> number
		```
	 */
	SetMaxSlopeAngle<T extends number>(angle: number): T | defined;

	/**
		@within Player

		@method SetWalkSpeed

		@param speed number -- The specified walking speed to use in a numerical value.

		Set the player's walking speed.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:SetWalkSpeed(WalkSpeed :: number) --> number
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.SetWalkSpeed(WalkSpeed :: number) // --> number
		```
	 */
	SetWalkSpeed<T extends number>(speed: number): T | defined;

	/**
		@within Player

		@method SetWalkSpeed

		@param reason string? -- The specified reasoning to display on one's kick display.

		@return boolean -- Was the player successfully kicked?

		Kick the player.

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			--// Server
			player:Kick("nerd") --> boolean
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			// Server
			player.Kick("nerd") // --> boolean
		```
	 */
	Kick<T extends string | boolean>(reason: string): boolean | T;

	/**
		@within Player

		@method Destroy

		Destroy and cleanup a player-hook (making it and not the player unusable).

		### Luau:
		```lua
			--// Functions
			--// Placeholder code.
			player:Destroy()
		```

		### TypeScript:
		```ts
			// Functions
			// Placeholder code.
			player.Destroy();
		```
	*/
	Destroy(): void;
};

interface PlayerConstructor {
	readonly ClassName: "Player";

	/**
		@within Player

		@param player Player -- The player to instantiate with.

		@return table -- Return the newly instantiated PlayerHook object.

		### Luau:
		```lua
			--// Types
			type table = { [any]: any }

			--// Services
			local Players: Workspace = game:GetService("Players")
			local ReplicatedStorage: ReplicatedStorage = game:GetService("ReplicatedStorage")

			--// Modules
			local PlayerHook: table = require(ReplicatedStorage:FindFirstChild("Player", true))

			--// Functions
			local function onPlayerAdded(localPlayer: Player)
				local player: PlayerHook.Player = PlayerHook.new(localPlayer)
			end

			Players.PlayerAdded:Connect(onPlayerAdded)
		```

		### TypeScript:
		```ts
			// Services
			import { Players } from "@rbxts/services";

			// Modules
			import { PlayerHook } from "@rbxts/player-hooks";

			// Functions
			function onPlayerAdded(localPlayer: Player) {
				const player: PlayerHook = new PlayerHook<typeof localPlayer>(localPlayer);
			}

			Players.PlayerAdded.Connect(onPlayerAdded);
		```
	 */
	new <T extends Player | object>(
		player?: T extends globalThis.Player | Player | PlayerHook.Destroyable ? T : defined
	): PlayerHook;
}

declare const PlayerHook: PlayerConstructor;

export { PlayerHook };
