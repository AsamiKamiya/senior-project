//  This file was automatically generated and should not be edited.

import AWSAppSync

public struct CreateTamamonInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: GraphQLID? = nil, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
    graphQLMap = ["id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified]
  }

  public var id: GraphQLID? {
    get {
      return graphQLMap["id"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }

  public var name: String {
    get {
      return graphQLMap["name"] as! String
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var fed: Int? {
    get {
      return graphQLMap["fed"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "fed")
    }
  }

  public var played: Int? {
    get {
      return graphQLMap["played"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "played")
    }
  }

  public var washed: Int? {
    get {
      return graphQLMap["washed"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "washed")
    }
  }

  public var modified: String? {
    get {
      return graphQLMap["modified"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }
}

public struct ModeltamamonConditionInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(name: ModelStringInput? = nil, fed: ModelIntInput? = nil, played: ModelIntInput? = nil, washed: ModelIntInput? = nil, modified: ModelStringInput? = nil, and: [ModeltamamonConditionInput?]? = nil, or: [ModeltamamonConditionInput?]? = nil, not: ModeltamamonConditionInput? = nil) {
    graphQLMap = ["name": name, "fed": fed, "played": played, "washed": washed, "modified": modified, "and": and, "or": or, "not": not]
  }

  public var name: ModelStringInput? {
    get {
      return graphQLMap["name"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var fed: ModelIntInput? {
    get {
      return graphQLMap["fed"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "fed")
    }
  }

  public var played: ModelIntInput? {
    get {
      return graphQLMap["played"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "played")
    }
  }

  public var washed: ModelIntInput? {
    get {
      return graphQLMap["washed"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "washed")
    }
  }

  public var modified: ModelStringInput? {
    get {
      return graphQLMap["modified"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }

  public var and: [ModeltamamonConditionInput?]? {
    get {
      return graphQLMap["and"] as! [ModeltamamonConditionInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "and")
    }
  }

  public var or: [ModeltamamonConditionInput?]? {
    get {
      return graphQLMap["or"] as! [ModeltamamonConditionInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "or")
    }
  }

  public var not: ModeltamamonConditionInput? {
    get {
      return graphQLMap["not"] as! ModeltamamonConditionInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "not")
    }
  }
}

public struct ModelStringInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: String? = nil, eq: String? = nil, le: String? = nil, lt: String? = nil, ge: String? = nil, gt: String? = nil, contains: String? = nil, notContains: String? = nil, between: [String?]? = nil, beginsWith: String? = nil, attributeExists: Bool? = nil, attributeType: ModelAttributeTypes? = nil, size: ModelSizeInput? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "contains": contains, "notContains": notContains, "between": between, "beginsWith": beginsWith, "attributeExists": attributeExists, "attributeType": attributeType, "size": size]
  }

  public var ne: String? {
    get {
      return graphQLMap["ne"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: String? {
    get {
      return graphQLMap["eq"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: String? {
    get {
      return graphQLMap["le"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: String? {
    get {
      return graphQLMap["lt"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: String? {
    get {
      return graphQLMap["ge"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: String? {
    get {
      return graphQLMap["gt"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var contains: String? {
    get {
      return graphQLMap["contains"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "contains")
    }
  }

  public var notContains: String? {
    get {
      return graphQLMap["notContains"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "notContains")
    }
  }

  public var between: [String?]? {
    get {
      return graphQLMap["between"] as! [String?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }

  public var beginsWith: String? {
    get {
      return graphQLMap["beginsWith"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "beginsWith")
    }
  }

  public var attributeExists: Bool? {
    get {
      return graphQLMap["attributeExists"] as! Bool?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeExists")
    }
  }

  public var attributeType: ModelAttributeTypes? {
    get {
      return graphQLMap["attributeType"] as! ModelAttributeTypes?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeType")
    }
  }

  public var size: ModelSizeInput? {
    get {
      return graphQLMap["size"] as! ModelSizeInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "size")
    }
  }
}

public enum ModelAttributeTypes: RawRepresentable, Equatable, JSONDecodable, JSONEncodable {
  public typealias RawValue = String
  case binary
  case binarySet
  case bool
  case list
  case map
  case number
  case numberSet
  case string
  case stringSet
  case null
  /// Auto generated constant for unknown enum values
  case unknown(RawValue)

  public init?(rawValue: RawValue) {
    switch rawValue {
      case "binary": self = .binary
      case "binarySet": self = .binarySet
      case "bool": self = .bool
      case "list": self = .list
      case "map": self = .map
      case "number": self = .number
      case "numberSet": self = .numberSet
      case "string": self = .string
      case "stringSet": self = .stringSet
      case "_null": self = .null
      default: self = .unknown(rawValue)
    }
  }

  public var rawValue: RawValue {
    switch self {
      case .binary: return "binary"
      case .binarySet: return "binarySet"
      case .bool: return "bool"
      case .list: return "list"
      case .map: return "map"
      case .number: return "number"
      case .numberSet: return "numberSet"
      case .string: return "string"
      case .stringSet: return "stringSet"
      case .null: return "_null"
      case .unknown(let value): return value
    }
  }

  public static func == (lhs: ModelAttributeTypes, rhs: ModelAttributeTypes) -> Bool {
    switch (lhs, rhs) {
      case (.binary, .binary): return true
      case (.binarySet, .binarySet): return true
      case (.bool, .bool): return true
      case (.list, .list): return true
      case (.map, .map): return true
      case (.number, .number): return true
      case (.numberSet, .numberSet): return true
      case (.string, .string): return true
      case (.stringSet, .stringSet): return true
      case (.null, .null): return true
      case (.unknown(let lhsValue), .unknown(let rhsValue)): return lhsValue == rhsValue
      default: return false
    }
  }
}

public struct ModelSizeInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: Int? = nil, eq: Int? = nil, le: Int? = nil, lt: Int? = nil, ge: Int? = nil, gt: Int? = nil, between: [Int?]? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "between": between]
  }

  public var ne: Int? {
    get {
      return graphQLMap["ne"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: Int? {
    get {
      return graphQLMap["eq"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: Int? {
    get {
      return graphQLMap["le"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: Int? {
    get {
      return graphQLMap["lt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: Int? {
    get {
      return graphQLMap["ge"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: Int? {
    get {
      return graphQLMap["gt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var between: [Int?]? {
    get {
      return graphQLMap["between"] as! [Int?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }
}

public struct ModelIntInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: Int? = nil, eq: Int? = nil, le: Int? = nil, lt: Int? = nil, ge: Int? = nil, gt: Int? = nil, between: [Int?]? = nil, attributeExists: Bool? = nil, attributeType: ModelAttributeTypes? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "between": between, "attributeExists": attributeExists, "attributeType": attributeType]
  }

  public var ne: Int? {
    get {
      return graphQLMap["ne"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: Int? {
    get {
      return graphQLMap["eq"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: Int? {
    get {
      return graphQLMap["le"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: Int? {
    get {
      return graphQLMap["lt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: Int? {
    get {
      return graphQLMap["ge"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: Int? {
    get {
      return graphQLMap["gt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var between: [Int?]? {
    get {
      return graphQLMap["between"] as! [Int?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }

  public var attributeExists: Bool? {
    get {
      return graphQLMap["attributeExists"] as! Bool?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeExists")
    }
  }

  public var attributeType: ModelAttributeTypes? {
    get {
      return graphQLMap["attributeType"] as! ModelAttributeTypes?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeType")
    }
  }
}

public struct UpdateTamamonInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: GraphQLID, name: String? = nil, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
    graphQLMap = ["id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified]
  }

  public var id: GraphQLID {
    get {
      return graphQLMap["id"] as! GraphQLID
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }

  public var name: String? {
    get {
      return graphQLMap["name"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var fed: Int? {
    get {
      return graphQLMap["fed"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "fed")
    }
  }

  public var played: Int? {
    get {
      return graphQLMap["played"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "played")
    }
  }

  public var washed: Int? {
    get {
      return graphQLMap["washed"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "washed")
    }
  }

  public var modified: String? {
    get {
      return graphQLMap["modified"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }
}

public struct DeleteTamamonInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: GraphQLID? = nil) {
    graphQLMap = ["id": id]
  }

  public var id: GraphQLID? {
    get {
      return graphQLMap["id"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }
}

public struct ModeltamamonFilterInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: ModelIDInput? = nil, name: ModelStringInput? = nil, fed: ModelIntInput? = nil, played: ModelIntInput? = nil, washed: ModelIntInput? = nil, modified: ModelStringInput? = nil, and: [ModeltamamonFilterInput?]? = nil, or: [ModeltamamonFilterInput?]? = nil, not: ModeltamamonFilterInput? = nil) {
    graphQLMap = ["id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified, "and": and, "or": or, "not": not]
  }

  public var id: ModelIDInput? {
    get {
      return graphQLMap["id"] as! ModelIDInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }

  public var name: ModelStringInput? {
    get {
      return graphQLMap["name"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var fed: ModelIntInput? {
    get {
      return graphQLMap["fed"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "fed")
    }
  }

  public var played: ModelIntInput? {
    get {
      return graphQLMap["played"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "played")
    }
  }

  public var washed: ModelIntInput? {
    get {
      return graphQLMap["washed"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "washed")
    }
  }

  public var modified: ModelStringInput? {
    get {
      return graphQLMap["modified"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }

  public var and: [ModeltamamonFilterInput?]? {
    get {
      return graphQLMap["and"] as! [ModeltamamonFilterInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "and")
    }
  }

  public var or: [ModeltamamonFilterInput?]? {
    get {
      return graphQLMap["or"] as! [ModeltamamonFilterInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "or")
    }
  }

  public var not: ModeltamamonFilterInput? {
    get {
      return graphQLMap["not"] as! ModeltamamonFilterInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "not")
    }
  }
}

public struct ModelIDInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: GraphQLID? = nil, eq: GraphQLID? = nil, le: GraphQLID? = nil, lt: GraphQLID? = nil, ge: GraphQLID? = nil, gt: GraphQLID? = nil, contains: GraphQLID? = nil, notContains: GraphQLID? = nil, between: [GraphQLID?]? = nil, beginsWith: GraphQLID? = nil, attributeExists: Bool? = nil, attributeType: ModelAttributeTypes? = nil, size: ModelSizeInput? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "contains": contains, "notContains": notContains, "between": between, "beginsWith": beginsWith, "attributeExists": attributeExists, "attributeType": attributeType, "size": size]
  }

  public var ne: GraphQLID? {
    get {
      return graphQLMap["ne"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: GraphQLID? {
    get {
      return graphQLMap["eq"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: GraphQLID? {
    get {
      return graphQLMap["le"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: GraphQLID? {
    get {
      return graphQLMap["lt"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: GraphQLID? {
    get {
      return graphQLMap["ge"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: GraphQLID? {
    get {
      return graphQLMap["gt"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var contains: GraphQLID? {
    get {
      return graphQLMap["contains"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "contains")
    }
  }

  public var notContains: GraphQLID? {
    get {
      return graphQLMap["notContains"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "notContains")
    }
  }

  public var between: [GraphQLID?]? {
    get {
      return graphQLMap["between"] as! [GraphQLID?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }

  public var beginsWith: GraphQLID? {
    get {
      return graphQLMap["beginsWith"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "beginsWith")
    }
  }

  public var attributeExists: Bool? {
    get {
      return graphQLMap["attributeExists"] as! Bool?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeExists")
    }
  }

  public var attributeType: ModelAttributeTypes? {
    get {
      return graphQLMap["attributeType"] as! ModelAttributeTypes?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeType")
    }
  }

  public var size: ModelSizeInput? {
    get {
      return graphQLMap["size"] as! ModelSizeInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "size")
    }
  }
}

public final class CreateTamamonMutation: GraphQLMutation {
  public static let operationString =
    "mutation CreateTamamon($input: CreateTamamonInput!, $condition: ModeltamamonConditionInput) {\n  createTamamon(input: $input, condition: $condition) {\n    __typename\n    id\n    name\n    fed\n    played\n    washed\n    modified\n  }\n}"

  public var input: CreateTamamonInput
  public var condition: ModeltamamonConditionInput?

  public init(input: CreateTamamonInput, condition: ModeltamamonConditionInput? = nil) {
    self.input = input
    self.condition = condition
  }

  public var variables: GraphQLMap? {
    return ["input": input, "condition": condition]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Mutation"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("createTamamon", arguments: ["input": GraphQLVariable("input"), "condition": GraphQLVariable("condition")], type: .object(CreateTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(createTamamon: CreateTamamon? = nil) {
      self.init(snapshot: ["__typename": "Mutation", "createTamamon": createTamamon.flatMap { $0.snapshot }])
    }

    public var createTamamon: CreateTamamon? {
      get {
        return (snapshot["createTamamon"] as? Snapshot).flatMap { CreateTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "createTamamon")
      }
    }

    public struct CreateTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamamon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("fed", type: .scalar(Int.self)),
        GraphQLField("played", type: .scalar(Int.self)),
        GraphQLField("washed", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var fed: Int? {
        get {
          return snapshot["fed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "fed")
        }
      }

      public var played: Int? {
        get {
          return snapshot["played"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "played")
        }
      }

      public var washed: Int? {
        get {
          return snapshot["washed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "washed")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class UpdateTamamonMutation: GraphQLMutation {
  public static let operationString =
    "mutation UpdateTamamon($input: UpdateTamamonInput!, $condition: ModeltamamonConditionInput) {\n  updateTamamon(input: $input, condition: $condition) {\n    __typename\n    id\n    name\n    fed\n    played\n    washed\n    modified\n  }\n}"

  public var input: UpdateTamamonInput
  public var condition: ModeltamamonConditionInput?

  public init(input: UpdateTamamonInput, condition: ModeltamamonConditionInput? = nil) {
    self.input = input
    self.condition = condition
  }

  public var variables: GraphQLMap? {
    return ["input": input, "condition": condition]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Mutation"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("updateTamamon", arguments: ["input": GraphQLVariable("input"), "condition": GraphQLVariable("condition")], type: .object(UpdateTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(updateTamamon: UpdateTamamon? = nil) {
      self.init(snapshot: ["__typename": "Mutation", "updateTamamon": updateTamamon.flatMap { $0.snapshot }])
    }

    public var updateTamamon: UpdateTamamon? {
      get {
        return (snapshot["updateTamamon"] as? Snapshot).flatMap { UpdateTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "updateTamamon")
      }
    }

    public struct UpdateTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamamon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("fed", type: .scalar(Int.self)),
        GraphQLField("played", type: .scalar(Int.self)),
        GraphQLField("washed", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var fed: Int? {
        get {
          return snapshot["fed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "fed")
        }
      }

      public var played: Int? {
        get {
          return snapshot["played"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "played")
        }
      }

      public var washed: Int? {
        get {
          return snapshot["washed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "washed")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class DeleteTamamonMutation: GraphQLMutation {
  public static let operationString =
    "mutation DeleteTamamon($input: DeleteTamamonInput!, $condition: ModeltamamonConditionInput) {\n  deleteTamamon(input: $input, condition: $condition) {\n    __typename\n    id\n    name\n    fed\n    played\n    washed\n    modified\n  }\n}"

  public var input: DeleteTamamonInput
  public var condition: ModeltamamonConditionInput?

  public init(input: DeleteTamamonInput, condition: ModeltamamonConditionInput? = nil) {
    self.input = input
    self.condition = condition
  }

  public var variables: GraphQLMap? {
    return ["input": input, "condition": condition]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Mutation"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("deleteTamamon", arguments: ["input": GraphQLVariable("input"), "condition": GraphQLVariable("condition")], type: .object(DeleteTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(deleteTamamon: DeleteTamamon? = nil) {
      self.init(snapshot: ["__typename": "Mutation", "deleteTamamon": deleteTamamon.flatMap { $0.snapshot }])
    }

    public var deleteTamamon: DeleteTamamon? {
      get {
        return (snapshot["deleteTamamon"] as? Snapshot).flatMap { DeleteTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "deleteTamamon")
      }
    }

    public struct DeleteTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamamon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("fed", type: .scalar(Int.self)),
        GraphQLField("played", type: .scalar(Int.self)),
        GraphQLField("washed", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var fed: Int? {
        get {
          return snapshot["fed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "fed")
        }
      }

      public var played: Int? {
        get {
          return snapshot["played"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "played")
        }
      }

      public var washed: Int? {
        get {
          return snapshot["washed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "washed")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class GetTamamonQuery: GraphQLQuery {
  public static let operationString =
    "query GetTamamon($id: ID!) {\n  getTamamon(id: $id) {\n    __typename\n    id\n    name\n    fed\n    played\n    washed\n    modified\n  }\n}"

  public var id: GraphQLID

  public init(id: GraphQLID) {
    self.id = id
  }

  public var variables: GraphQLMap? {
    return ["id": id]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Query"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("getTamamon", arguments: ["id": GraphQLVariable("id")], type: .object(GetTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(getTamamon: GetTamamon? = nil) {
      self.init(snapshot: ["__typename": "Query", "getTamamon": getTamamon.flatMap { $0.snapshot }])
    }

    public var getTamamon: GetTamamon? {
      get {
        return (snapshot["getTamamon"] as? Snapshot).flatMap { GetTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "getTamamon")
      }
    }

    public struct GetTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamamon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("fed", type: .scalar(Int.self)),
        GraphQLField("played", type: .scalar(Int.self)),
        GraphQLField("washed", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var fed: Int? {
        get {
          return snapshot["fed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "fed")
        }
      }

      public var played: Int? {
        get {
          return snapshot["played"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "played")
        }
      }

      public var washed: Int? {
        get {
          return snapshot["washed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "washed")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class ListTamamonsQuery: GraphQLQuery {
  public static let operationString =
    "query ListTamamons($filter: ModeltamamonFilterInput, $limit: Int, $nextToken: String) {\n  listTamamons(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    __typename\n    items {\n      __typename\n      id\n      name\n      fed\n      played\n      washed\n      modified\n    }\n    nextToken\n  }\n}"

  public var filter: ModeltamamonFilterInput?
  public var limit: Int?
  public var nextToken: String?

  public init(filter: ModeltamamonFilterInput? = nil, limit: Int? = nil, nextToken: String? = nil) {
    self.filter = filter
    self.limit = limit
    self.nextToken = nextToken
  }

  public var variables: GraphQLMap? {
    return ["filter": filter, "limit": limit, "nextToken": nextToken]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Query"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("listTamamons", arguments: ["filter": GraphQLVariable("filter"), "limit": GraphQLVariable("limit"), "nextToken": GraphQLVariable("nextToken")], type: .object(ListTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(listTamamons: ListTamamon? = nil) {
      self.init(snapshot: ["__typename": "Query", "listTamamons": listTamamons.flatMap { $0.snapshot }])
    }

    public var listTamamons: ListTamamon? {
      get {
        return (snapshot["listTamamons"] as? Snapshot).flatMap { ListTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "listTamamons")
      }
    }

    public struct ListTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["ModeltamamonConnection"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("items", type: .list(.object(Item.selections))),
        GraphQLField("nextToken", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(items: [Item?]? = nil, nextToken: String? = nil) {
        self.init(snapshot: ["__typename": "ModeltamamonConnection", "items": items.flatMap { $0.map { $0.flatMap { $0.snapshot } } }, "nextToken": nextToken])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var items: [Item?]? {
        get {
          return (snapshot["items"] as? [Snapshot?]).flatMap { $0.map { $0.flatMap { Item(snapshot: $0) } } }
        }
        set {
          snapshot.updateValue(newValue.flatMap { $0.map { $0.flatMap { $0.snapshot } } }, forKey: "items")
        }
      }

      public var nextToken: String? {
        get {
          return snapshot["nextToken"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "nextToken")
        }
      }

      public struct Item: GraphQLSelectionSet {
        public static let possibleTypes = ["tamamon"]

        public static let selections: [GraphQLSelection] = [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
          GraphQLField("name", type: .nonNull(.scalar(String.self))),
          GraphQLField("fed", type: .scalar(Int.self)),
          GraphQLField("played", type: .scalar(Int.self)),
          GraphQLField("washed", type: .scalar(Int.self)),
          GraphQLField("modified", type: .scalar(String.self)),
        ]

        public var snapshot: Snapshot

        public init(snapshot: Snapshot) {
          self.snapshot = snapshot
        }

        public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
          self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
        }

        public var __typename: String {
          get {
            return snapshot["__typename"]! as! String
          }
          set {
            snapshot.updateValue(newValue, forKey: "__typename")
          }
        }

        public var id: GraphQLID {
          get {
            return snapshot["id"]! as! GraphQLID
          }
          set {
            snapshot.updateValue(newValue, forKey: "id")
          }
        }

        public var name: String {
          get {
            return snapshot["name"]! as! String
          }
          set {
            snapshot.updateValue(newValue, forKey: "name")
          }
        }

        public var fed: Int? {
          get {
            return snapshot["fed"] as? Int
          }
          set {
            snapshot.updateValue(newValue, forKey: "fed")
          }
        }

        public var played: Int? {
          get {
            return snapshot["played"] as? Int
          }
          set {
            snapshot.updateValue(newValue, forKey: "played")
          }
        }

        public var washed: Int? {
          get {
            return snapshot["washed"] as? Int
          }
          set {
            snapshot.updateValue(newValue, forKey: "washed")
          }
        }

        public var modified: String? {
          get {
            return snapshot["modified"] as? String
          }
          set {
            snapshot.updateValue(newValue, forKey: "modified")
          }
        }
      }
    }
  }
}

public final class OnCreateTamamonSubscription: GraphQLSubscription {
  public static let operationString =
    "subscription OnCreateTamamon {\n  onCreateTamamon {\n    __typename\n    id\n    name\n    fed\n    played\n    washed\n    modified\n  }\n}"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Subscription"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("onCreateTamamon", type: .object(OnCreateTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(onCreateTamamon: OnCreateTamamon? = nil) {
      self.init(snapshot: ["__typename": "Subscription", "onCreateTamamon": onCreateTamamon.flatMap { $0.snapshot }])
    }

    public var onCreateTamamon: OnCreateTamamon? {
      get {
        return (snapshot["onCreateTamamon"] as? Snapshot).flatMap { OnCreateTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "onCreateTamamon")
      }
    }

    public struct OnCreateTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamamon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("fed", type: .scalar(Int.self)),
        GraphQLField("played", type: .scalar(Int.self)),
        GraphQLField("washed", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var fed: Int? {
        get {
          return snapshot["fed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "fed")
        }
      }

      public var played: Int? {
        get {
          return snapshot["played"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "played")
        }
      }

      public var washed: Int? {
        get {
          return snapshot["washed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "washed")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class OnUpdateTamamonSubscription: GraphQLSubscription {
  public static let operationString =
    "subscription OnUpdateTamamon {\n  onUpdateTamamon {\n    __typename\n    id\n    name\n    fed\n    played\n    washed\n    modified\n  }\n}"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Subscription"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("onUpdateTamamon", type: .object(OnUpdateTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(onUpdateTamamon: OnUpdateTamamon? = nil) {
      self.init(snapshot: ["__typename": "Subscription", "onUpdateTamamon": onUpdateTamamon.flatMap { $0.snapshot }])
    }

    public var onUpdateTamamon: OnUpdateTamamon? {
      get {
        return (snapshot["onUpdateTamamon"] as? Snapshot).flatMap { OnUpdateTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "onUpdateTamamon")
      }
    }

    public struct OnUpdateTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamamon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("fed", type: .scalar(Int.self)),
        GraphQLField("played", type: .scalar(Int.self)),
        GraphQLField("washed", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var fed: Int? {
        get {
          return snapshot["fed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "fed")
        }
      }

      public var played: Int? {
        get {
          return snapshot["played"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "played")
        }
      }

      public var washed: Int? {
        get {
          return snapshot["washed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "washed")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class OnDeleteTamamonSubscription: GraphQLSubscription {
  public static let operationString =
    "subscription OnDeleteTamamon {\n  onDeleteTamamon {\n    __typename\n    id\n    name\n    fed\n    played\n    washed\n    modified\n  }\n}"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Subscription"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("onDeleteTamamon", type: .object(OnDeleteTamamon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(onDeleteTamamon: OnDeleteTamamon? = nil) {
      self.init(snapshot: ["__typename": "Subscription", "onDeleteTamamon": onDeleteTamamon.flatMap { $0.snapshot }])
    }

    public var onDeleteTamamon: OnDeleteTamamon? {
      get {
        return (snapshot["onDeleteTamamon"] as? Snapshot).flatMap { OnDeleteTamamon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "onDeleteTamamon")
      }
    }

    public struct OnDeleteTamamon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamamon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("fed", type: .scalar(Int.self)),
        GraphQLField("played", type: .scalar(Int.self)),
        GraphQLField("washed", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, fed: Int? = nil, played: Int? = nil, washed: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamamon", "id": id, "name": name, "fed": fed, "played": played, "washed": washed, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var fed: Int? {
        get {
          return snapshot["fed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "fed")
        }
      }

      public var played: Int? {
        get {
          return snapshot["played"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "played")
        }
      }

      public var washed: Int? {
        get {
          return snapshot["washed"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "washed")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}