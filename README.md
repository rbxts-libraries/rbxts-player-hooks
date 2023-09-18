# Player Hooks

Player (hooks) is a more complexed class designated to wrap around the general Player interface found on Roblox's API, feel free to add more features through PRs!

## Installation

### 📦 — NPM:

```
npm i @rbxts/player-hooks
```

### 🧶 — Yarn:

```
yarn add @rbxts/player-hooks
```

### 📀 — pnPM:

```
pnpm add @rbxts/player-hooks
```

## Player Hooks API

### Types

```ts
interface Destroyable {
	Destroy(): void;
}

type Object =
	| never
	| undefined
	| ((this: defined) => void)
	| ((_: defined) => void)
	| ExtractKeys<defined, () => void>
	| thread
	| RBXScriptConnection
	| globalThis.Player
	| Player
	| PlayerHook.Destroyable;
```

### Constructor

```ts
const player: PlayerHook = new Player(localPlayer);
```

### `player.RetrieveCharacter`

```ts
public RetrieveCharacter(): Model;
```

Return the player's character.

### `player.RetrieveHumanoid`

```ts
public RetrieveHumanoid(): Humanoid;
```

Return the player's character's humanoid.

### `player.WaitForCharacter`

```ts
public WaitForCharacter(Callback?: Callback): Model | boolean;
```

Wait for and return the player's character (cancels by default if five attempts fail).

### `player.WaitForHumanoid`

```ts
public WaitForHumanoid(Callback?: Callback): Humanoid | boolean;
```

Wait for and return the player's characters' humanoid (cancels by default if five attempts fail).

### `player.RetrieveName`

```ts
RetrieveName(): string;
```

Return the player's name.

### `player.RetrievePlayer`

```ts
public RetrievePlayer(): Player;
```

Return the player's `Player` object.

### `player.RetrieveUserId`

```ts
public RetrieveUserId(): number ;
```

Return the player's unique UserId.

### `player.CharacterAdded`

```ts
public CharacterAdded(Callback?: Callback): defined;
```

Run the specified callback function on the addition of the player's character.

### `player.HumanoidAdded`

```ts
public HumanoidAdded(Callback?: Callback): defined;
```

Run the specified callback function on the addition of the player's humanoid.

### `player.SetJumpPower`

```ts
public SetJumpPower(power: number): defined;
```

Set the player's jump-power.

### `player.UseJumpPower`

```ts
public UseJumpPower(value: boolean): defined;
```

Set whether or not to use the player's jump-power for jump-related adjustments.

### `player.SetJumpHeight`

```ts
public SetJumpHeight(height: number): defined;
```

Set the player's jump-height.

### `player.SetMaxSlopeAngle`

```ts
public SetMaxSlopeAngle(angle: number): defined;
```

Set the player's maximum slope angle.

### `player.SetWalkSpeed`

```ts
public SetWalkSpeed(speed: number): defined;
```

Kick the player.

### `player.Kick`

```ts
public Kick(reason: string): boolean;
```

Set the player's walking speed.

### `player.Destroy`

```ts
public Destroy(): void;
```

Destroy and cleanup a player-hook (making it and not the player unusable).

## Example

```ts
// Services
import { Players } from "@rbxts/services";

// Modules
import { PlayerHook } from "./";

// Variables
const PLAYER_CACHE: Array<Player> = [];

// Functions
function onPlayerAdded(localPlayer: Player) {
	if (PLAYER_CACHE.indexOf(localPlayer) !== undefined) {
		return;
	}

	function characterCallback() {
		print(`The character has been added!`);
	}

	function humanoidCallback() {
		print(`The humanoid has been added!`);
	}

	const player: PlayerHook = new PlayerHook<typeof localPlayer>(localPlayer);

	player.CharacterAdded(characterCallback);
	player.HumanoidAdded(humanoidCallback);

	player.WaitForCharacter(function (...args: Array<Model | boolean>) {
		print(...args); // --> Model | Model.Name

		print(player.RetrieveCharacter().Name); // --> Model.Name
	});

	player.WaitForHumanoid(function (...args: Array<Humanoid | boolean>) {
		print(...args); // --> Humanoid | Humanoid.Name

		player.SetWalkSpeed(1e1); // --> 10
		print(player.RetrieveHumanoid().WalkSpeed); // --> 10

		player.SetWalkSpeed(1e2); // --> 100
		print(player.RetrieveHumanoid().WalkSpeed); // --> 100
	});
}

function onPlayerRemoving(localPlayer: Player) {
	if (PLAYER_CACHE.indexOf(localPlayer) === undefined) {
		return;
	} else {
		const player = PLAYER_CACHE.indexOf(localPlayer) as unknown as PlayerHook;

		PLAYER_CACHE.indexOf(localPlayer) === undefined;

		player.Destroy();
	}
}

Players.PlayerAdded.Connect(onPlayerAdded);
Players.PlayerRemoving.Connect(onPlayerRemoving);
```
